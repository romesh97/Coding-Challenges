<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// post request to submit form
Route::post('/upload-csv', 'App\Http\Controllers\AttendanceController@csvFileImport');

// get request to retrieve data
Route::get('/attendance-details', 'App\Http\Controllers\AttendanceController@getAttendanceInfo');