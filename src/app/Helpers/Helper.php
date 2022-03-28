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
}