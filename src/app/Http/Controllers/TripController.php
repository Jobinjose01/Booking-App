<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\City;
use App\Models\Trip;
use Illuminate\Http\Request;

class TripController extends Controller
{
    
        public function __constructor(){

            
        }
        
        public function getAllTrips(Request $request){


            $data = Trip::join('cities AS C', 'C.id' ,'=', 'trips.source_city_id')
                        ->join('cities AS C1', 'C1.id' ,'=', 'trips.destination_city_id')
                        ->WhereNull('trips.deleted_at')
                        ->get(['C.name as source', 'C1.name as destination', 'trips.spots', 'trips.created_at', 'trips.status' ,'trips.id']);
            
           
            return response()->json($data);
        }


        public function createTrip(Request $request){

            $source_city_id = $request->input('source_city_id');
            $destination_city_id = $request->input('destination_city_id');
            $spots = $request->input('spots');
            $user = Auth::user();

            try{

                $result = Trip::Create([
                    'source_city_id' => $source_city_id,
                    'destination_city_id' => $destination_city_id,
                    'spots' => $spots,
                    'created_by' => !empty($user->id) ? $user->id : 1,
                    'updated_by' => !empty($user->id) ? $user->id : 1,
                ]);

            }catch(Exception $e) {

               $this->failedMessage("Trip Creation Failed!");
            }

            if($result){

                $data['status'] = 1;
                $data['data'] = $result;
                $data['message'] = "Trip Created Successfully!";

            }else{

                $this->failedMessage("Trip Creation Failed!");
            }

            return response()->json($data);

        }


        public function failedMessage($msg){

            $data['status'] = 0;
            $data['data'] = [];
            $data['message'] = $msg;
            return response()->json($data);
            exit;
        }
}
