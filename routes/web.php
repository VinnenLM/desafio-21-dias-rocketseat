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

$router->get('/', function(){
    return view('home/index');
});

$router->get('/dia2', function() use ($router){
    //return $router->app->version();
    return view('Dia2/index');
});

$router->get('/dia3', function(){
    return view('Dia3/index');
});

$router->get('/dia4', function(){
    return view('Dia4/index');
});

$router->get('/dia5', function(){
    return view('Dia5/index');
});

$router->get('/dia6', function(){
    return view('Dia6/index');
});

$router->get('/dia7', function(){
    return view('Dia7/index');
});

$router->get('/dia8', function(){
    return view('Dia8/index');
});

$router->get('/dia9', function(){
    return view('Dia9/index');
});

$router->get('/dia10', function(){
    return view('Dia10/index');
});

$router->get('/dia11', function(){
    return view('Dia11/index');
});

$router->get('/dia12', function(){
    return view('Dia12/index');
});

$router->get('/dia13', function(){
    return view('Dia13/index');
});

$router->get('/dia14', function(){
    return view('Dia14/index');
});

$router->get('/dia15', function(){
    return view('Dia15/index');
});

$router->get('/dia16', function(){
    return view('Dia16/index');
});

$router->get('/dia17', function(){
    return view('Dia17/index');
});

$router->get('/dia18', function(){
    return view('Dia18/index');
});

$router->get('/dia19', function(){
    return view('Dia19/index');
});

$router->get('/dia20', function(){
    return view('Dia20/index');
});