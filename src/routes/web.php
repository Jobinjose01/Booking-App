<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function () use ($router) {

    $router->post('authendicate',  ['uses' => 'AuthController@authendicate']);

});

$router->group(['middleware' => ['auth'], 'prefix' => 'api'], function () use ($router) {

    $router->get('cities',  ['uses' => 'CityController@getCities']);

    $router->get('trip/all',  ['uses' => 'TripController@getAllTrips']);

    $router->post('trip/create',  ['uses' => 'TripController@createTrip']);

});