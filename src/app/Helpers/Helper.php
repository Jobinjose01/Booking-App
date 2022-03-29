<?php

namespace App\Helpers;


class Helper {

    /**
     * SuccessResponse common method for succes response.
     * @param  $dataset Array  
     * @param  $msg string
     * @return Array 
     */
    public static function successResponse($dataset , $msg = 'Data Fetched Successfully'){

        $data['status'] = 1;
        $data['message'] = $msg;
        $data['code'] = 200;
        $data['data'] = $dataset;
        return $data;

    }

    /**
     * FailedResponse common method for failed response.
     * @param  $msg string
     * @return Array 
     */
    public static function failedResponse($msg){

        $data['status'] = 0;
        $data['message'] = $msg;
        $data['code'] = 200;
        $data['data'] = [];
        return $data;
    }

    /**
     * ValidateAvailability make sure city_id are numeric.
     * @param  $msg string
     * @return Array 
     */
    public function validateAvailability()
    {
        return [
            'source_city_id' => 'required|numeric',
            'destination_city_id' => 'required|numeric',           
        ];
    
    }
    /**
     * ValidateBooking make sure booking params are valid.
     * @param  $msg string
     * @return Array 
     */
    public function validateBooking()
    {
        return [
            'trip_id' => 'required|numeric',
            'spots' => 'required|numeric|gt:0',           
        ];
    
    }
    /**
     * ValidateCancelTrip validate the booking id and spots.
     * @param  $msg string
     * @return Array 
     */
    public function validateCancelTrip()
    {
        return [
            'booking_id' => 'required|string',
            'spots' => 'required|numeric|gt:0',           
        ];
    }

    /**
     * ValidateCreateTrip validate the user inputs.
     * @param  $msg string
     * @return Array 
     */
    public function ValidateCreateTrip()
    {
        return [
            'source_city_id' => 'required|numeric|gt:0',
            'destination_city_id' => 'required|numeric|gt:0',
            'spots' => 'required|numeric|gt:0',           
        ];
    }
}