<?php

use Illuminate\Support\Facades\Route;


Route::view('{path}', 'index')->where('path', '([A-z\d\-\/_.]+)?');

// Route::get("{path?}", "WebControllers\HomeController@index")->where('path', '.+');