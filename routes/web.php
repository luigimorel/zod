<?php

use Illuminate\Support\Facades\Route;

<<<<<<< HEAD

Route::view('/{any}', 'index')->where('any', '.*');


// Route::get({any}, function () {
//     return view('index'); // or wherever your React app is bootstrapped.
// })->where('any', '.*');
=======
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::view('/{any}', 'index')->where('any', '.*');
>>>>>>> adc64e7bc696ed74e3e8d9595b83dd8a4f781d29
