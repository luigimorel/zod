<?php

use Illuminate\Support\Facades\Route;


Route::view('/{any}', 'index')->where('any', '.*');


// Route::get({any}, function () {
//     return view('index'); // or wherever your React app is bootstrapped.
// })->where('any', '.*');