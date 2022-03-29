<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\City;
use App\Models\Trip;
use App\Helpers\Helper;
use Illuminate\Http\Request;

class TripController extends Controller
{
    
        /**
         * GetAllTrips list trip master.
         * @param  Request $request  
         * @return Json A list of trips.
         */
        public function getAllTrips(Request $request){


            $result = Trip::join('cities AS C', 'C.id' ,'=', 'trips.source_city_id')
                        ->join('cities AS C1', 'C1.id' ,'=', 'trips.destination_city_id')
                        ->WhereNull('trips.deleted_at')
                        ->get(['C.name as source', 'C1.name as destination', 'trips.spots', 'trips.created_at', 'trips.status' ,'trips.id']);
            
            $data = Helper::successResponse($result);
            return response()->json($data);
        }

        /**
         * CreateTrip Create a trip between two cities.
         * @param  bigint $source_city_id   
         * @param  bigint $destination_city_id  
         * @param  integer $spots  number of spots available on the trip
         * @return Json Success or failed message.
         */
        public function createTrip(Request $request){

            $source_city_id = $request->input('source_city_id');
            $destination_city_id = $request->input('destination_city_id');
            $spots = $request->input('spots');
            $user = Auth::user();

            $validation = \Validator::make($request->all(), with(new Helper)->validateCreateTrip());

            if ($validation->fails()) {

                $msg = "Validation Error!";
                $data = Helper::failedResponse($msg);  

            }else{
                try{

                    $result = Trip::Create([
                        'source_city_id' => $source_city_id,
                        'destination_city_id' => $destination_city_id,
                        'spots' => $spots,
                        'created_by' => !empty($user->id) ? $user->id : 1,
                        'updated_by' => !empty($user->id) ? $user->id : 1,
                    ]);

                }catch(Exception $e) {

                    $data = Helper::failedResponse("Trip Creation Failed!");
                }

                if($result){
                    $data =  Helper::successResponse($result,"Trip Created Successfully!");
                }else{
                    $data = Helper::failedResponse("Trip Creation Failed!");
                }
            }

            return response()->json($data);

        }
        
}
