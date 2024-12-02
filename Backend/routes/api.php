<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\SpaceController;
use Illuminate\Support\Facades\Route;

Route::get('/login', function () {
    return 'welcome';
});

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:api');


/* Espacios */
Route::get('space', [SpaceController::class, 'index']);
Route::get('space/{id}', [SpaceController::class, 'show']);
Route::post('space', [SpaceController::class, 'store']);
Route::put('space/{id}', [SpaceController::class, 'update']);
Route::delete('space/{id}', [SpaceController::class, 'destroy']);

/* Reservaciones */
Route::get('reservation', [ReservationController::class, 'index']);
Route::get('reservation/{id}', [ReservationController::class, 'show']);
Route::post('reservation', [ReservationController::class, 'store']);
Route::put('reservation/{id}', [ReservationController::class, 'update']);
Route::delete('reservation/{id}', [ReservationController::class, 'destroy']);