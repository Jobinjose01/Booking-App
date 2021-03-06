<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{

    protected $fillable = [
        'source_city_id', 'destination_city_id', 'status', 'spots', 'created_by', 'updated_by' ,'created_at', 'updated_at'
    ];

    /**
     * GetStatusAttribute format the status in the response.
     */
    public function getStatusAttribute($value){

        if($value == 1){
            return "Active";
        }elseif($value == 0){
            return "Inactive";            
        }
    }

    /**
     * GetCreatedAtAttribute format the created_at date in the response.
     */
    public function getCreatedAtAttribute($value){

        return date("d-M-Y",strtotime($value));
    }
}
