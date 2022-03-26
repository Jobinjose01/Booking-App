<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\City;
use App\Models\Trip;
use App\Models\TripBooking;
use App\Models\TripBookingDetails;
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
                            ->Where('T.source_city_id',$source_city_id)
                            ->Where('T.destination_city_id',$destination_city_id)
                            ->WhereNull('T.deleted_at')
                            ->where('T.status',1)
                            ->groupBy('T.id')
                            ->get([
                                'C.name as source', 'C1.name as destination','T.spots','T.id','T.spots as available_spots'
                            ]);
            return response()->json($result);                 
        }

       

        public function failedMessage($msg){

            $data['status'] = 0;
            $data['data'] = [];
            $data['message'] = $msg;
            return $data;
            
        }       


        public function createBooking(Request $request){

            $trip_id = $request->input('trip_id');
            $requested_spots = $request->input('spots');
            $user = Auth::user();

            $booked_count = $this->countBookedSpots($trip_id);
            $total_count  = Trip::Where('id',$trip_id)->value('spots');
            $avilable = $total_count - $booked_count;
           

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

                $msg = "Booked Successfully!";
                $data['status'] = 1;
                $data['message'] = $msg;

                return response()->json($data);

            }elseif($avilable > 0){
                
                $msg = "Not enough spots!";
                $data = $this->failedMessage($msg);
            }

            if($avilable == 0){
                $msg = "Sold Out!";
                $data = $this->failedMessage($msg);                
                
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
                ->get([
                    'C.name as source', 'C1.name as destination',
                    'D.spots','trip_bookings.booking_id','D.booking_status',
                    'trip_bookings.created_at','D.cancelled_on'
                ]);
            return response()->json($result);     

        }
}
