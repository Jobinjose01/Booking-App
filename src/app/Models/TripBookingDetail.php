<?php

namespace App\Models;

use App\Models\TripBooking;
use Illuminate\Database\Eloquent\Model;

class TripBookingDetail extends Model
{
    protected $table = "trip_booking_details";

    protected $fillable = [
        'booking_id', 'spots', 'booking_status', 'cancelled_on', 'created_at', 'updated_at'
    ];

    public function getBookingStatusAttribute($value){

        if($value == 1){
            return "Booked";
        }elseif($value == 0){
            return "Cancelled";            
        }
    }

    public function getCreatedAtAttribute($value){

        return date("d-M-Y",strtotime($value));
    }

    public function tripBooking(){

        return $this->belongsTo(TripBooking::class,'booking_id','booking_id');
    }
}
