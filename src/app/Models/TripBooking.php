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

    /**
     * TripBookingDetails Setup a relation to BookingDetails.
     * @param  string $booking_id  is the mapping indentifier 
     */
    public function tripBookingDetails(){

        return $this->hasMany(TripBookingDetail::class,'booking_id','booking_id');
    }

    /**
     * GetCreatedAtAttribute format the created_at date in the response.
     */
    public function getCreatedAtAttribute($value){

        return date("d-M-Y",strtotime($value));
    }

    /**
     * GetCreatedAtAttribute format the cancelled_on date in the response..
     */
    public function getCancelledOnAttribute($value){

        return !empty($value) ? date("d-M-Y",strtotime($value)) : '-';
    }

    /**
     * GetCreatedAtAttribute format the booking_status in the response..
     */
    public function getBookingStatusAttribute($value){

        if($value == 1){
            return "Booked";
        }elseif($value == 0){
            return "Cancelled";            
        }
    }
}
