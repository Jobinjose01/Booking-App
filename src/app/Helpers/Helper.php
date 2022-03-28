<?php

namespace App\Helpers;


class Helper {


    public static function successResponse($dataset , $msg = 'Data Fetched Successfully'){

        $data['status'] = 1;
        $data['message'] = $msg;
        $data['code'] = 200;
        $data['data'] = $dataset;
        return $data;

    }

    public static function failedResponse($msg){

        $data['status'] = 0;
        $data['message'] = $msg;
        $data['code'] = 200;
        $data['data'] = [];
        return $data;
    }
}