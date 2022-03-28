<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\City;
use App\Models\Trip;
use App\Helpers\Helper;
use App\Models\TripBooking;
use App\Models\TripBookingDetail;
use Illuminate\Http\Request;

class TripBookingController extends Controller
{
    
        public function __constructor(){

            
        }
        
        public function checkAvailabilty(Request $request){

            $source_city_id = $request->input('source_city_id');
            $destination_city_id = $request->input('destination_city_id');

            $result = \DB::table('trips AS T')
                            ->join('cities AS C','C.id','=','T.source_city_id')
                            ->join('cities AS C1','C1.id','=','T.destination_city_id')
                            ->leftJoin('trip_bookings AS TB','TB.trip_id','=','T.id')
                            ->leftjoin('trip_booking_details AS TD',function($join){
                                $join->on('TD.booking_id','TB.booking_id');
                                $join->Where('TD.booking_status',1);
                            })
                            ->Where('T.source_city_id',$source_city_id)
                            ->Where('T.destination_city_id',$destination_city_id)
                            ->WhereNull('T.deleted_at')
                            ->where('T.status',1)
                            ->groupBy('T.id')
                            ->select([
                                'C.name as source', 'C1.name as destination','T.spots','T.id',
                                \DB::raw('sum(TD.spots) as booked_spots')
                            ])
                            ->get();

            $data = Helper::successResponse($result);
            return response()->json($data);                 
        }

       


        public function createBooking(Request $request){

            $trip_id = $request->input('trip_id');
            $requested_spots = $request->input('spots');
            $user = Auth::user();

            $booked_count = $this->countBookedSpots($trip_id);
            $total_count  = Trip::Where('id',$trip_id)->value('spots');
            $avilable = $total_count - $booked_count;
           
            //Check spots availability
            if($requested_spots <= $avilable){
                
                $booking_id = uniqid();
                $booking = TripBooking::Create([
                    'booking_id' => $booking_id,
                    'trip_id' => $trip_id,
                    'booked_by' => !empty($user->id) ? $user->id : 0,
                    'trip_date' => date('Y-m-d H:i:s'),
                ]);

                $booking->tripBookingDetails()->create([
                    'spots' => $requested_spots                    
                ]);
              
               
                $data = Helper::successResponse([], "Booked Successfully!");
                return response()->json($data);

            }elseif($avilable > 0){
                
                $msg = "Not enough spots!";
                $data = Helper::failedResponse($msg);
            }

            if($avilable == 0){
                $msg = "Sold Out!";
                $data = Helper::failedResponse($msg);                
                
            }

            return response()->json($data);
        }

        public function countBookedSpots($trip_id){

            return \Db::table('trip_bookings AS B')
                            ->join('trips AS T','T.id','=','B.trip_id')
                            ->join('trip_booking_details AS D','D.booking_id','=','B.booking_id')
                            ->Where('D.booking_status',1)
                            ->where('B.trip_id',$trip_id)
                            ->SUM('D.spots');
        }

        public function getAllMyTrips(Request $request){

            $user = Auth::user();

            $result = TripBooking::leftjoin('trip_booking_details AS D','D.booking_id','=','trip_bookings.booking_id')
                ->join('trips AS T','T.id','=','trip_bookings.trip_id')
                ->join('cities AS C','C.id','=','T.source_city_id')
                ->join('cities AS C1','C1.id','=','T.destination_city_id')
                ->Where('trip_bookings.booked_by',$user->id)
                ->WhereNull('T.deleted_at')
                ->where('T.status',1)
                ->OrderBy('trip_bookings.id','DESC')
                ->get([
                    'C.name as source', 'C1.name as destination',
                    'D.spots','trip_bookings.booking_id','D.booking_status',
                    'trip_bookings.created_at','D.cancelled_on'
                ]);
            
            $data = Helper::successResponse($result);
            return response()->json($data);     

        }

        public function cancelMyTrip(Request $request){

            $user = Auth::user();
            $booking_id = $request->input('booking_id');
            $cancel_spots = $request->input('spots');

            $booked_spots = TripBooking::leftjoin('trip_booking_details AS D','D.booking_id','=','trip_bookings.booking_id')
                            ->Where('trip_bookings.booked_by',$user->id)
                            ->Where('trip_bookings.booking_id',$booking_id)
                            ->where('D.booking_status',1)
                            ->value('D.spots');

            if($booked_spots >= $cancel_spots){
                //Full cancell
                if($booked_spots == $cancel_spots){

                    TripBookingDetail::Where('booking_id',$booking_id)
                            ->update([
                                'booking_status' => 0,
                                'cancelled_on' => date('Y-m-d H:i:s')
                            ]);
                }
                //Flexible cancel
                if($booked_spots > $cancel_spots){
                    //Update remaining spots
                    TripBookingDetail::Where('booking_id',$booking_id)
                            ->update([
                                'spots' => ($booked_spots - $cancel_spots),                                
                            ]);
                    //canclled entry creating
                    TripBookingDetail::create([
                        'booking_id' => $booking_id,
                        'spots' => $cancel_spots,
                        'booking_status' => 0,
                        'cancelled_on' => date('Y-m-d H:i:s')
                    ]);
                }

                $data = Helper::successResponse([], "Spots cancelled successfully!");
            }else{

                $msg = "Cancel request spots is greater than reserved spots!";
                $data = Helper::failedResponse($msg);
            }

            return response()->json($data);
            
        }


        public function getAllBooking(){

                $result = TripBooking::leftjoin('trip_booking_details AS D','D.booking_id','=','trip_bookings.booking_id')
                    ->join('users AS U','trip_bookings.booked_by','=','U.id')
                    ->join('trips AS T','T.id','=','trip_bookings.trip_id')
                    ->join('cities AS C','C.id','=','T.source_city_id')
                    ->join('cities AS C1','C1.id','=','T.destination_city_id')
                    ->WhereNull('T.deleted_at')
                    ->where('T.status',1)
                    ->OrderBy('trip_bookings.id','DESC')
                    ->get([
                        'C.name as source', 'C1.name as destination',
                        'D.spots','trip_bookings.booking_id','D.booking_status',
                        'trip_bookings.created_at','D.cancelled_on','U.name AS booked_by'
                    ]);
            
            $data = Helper::successResponse($result);
            return response()->json($data); 
        }
}
