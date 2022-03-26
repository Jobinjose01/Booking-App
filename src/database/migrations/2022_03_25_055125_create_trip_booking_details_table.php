<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trip_booking_details', function (Blueprint $table) {
            $table->id();
            $table->string('booking_id',50);
            $table->integer('spots');
            $table->smallInteger('booking_status')->default(1)->comment('1-booked,0-cancelled');
            $table->foreign('booking_id')->references('booking_id')->on('trip_bookings');
            $table->timestamp('cancelled_on')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trip_booking_details');
    }
};
