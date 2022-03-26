<?php

namespace App\Models;

use App\Models\TripBookingDetail;
use Illuminate\Database\Eloquent\Model;

class TripBooking extends Model
{
    protected $table = "trip_bookings";

    protected $fillable = [
        'booking_id', 'trip_id', 'booked_by', 'trip_date', 'created_at', 'updated_at'
    ];

    public function tripBookingDetails()
    {
        return $this->hasMany(TripBookingDetail::class,'booking_id','booking_id');
    }

    public function getCreatedAtAttribute($value){

        return date("d-M-Y",strtotime($value));
    }
}