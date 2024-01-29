<?php

use App\Http\Controllers\BrandController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderdetailController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TopicController;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::prefix('brand')->group(function () {
    Route::get('index', [BrandController::class, 'index']);
    Route::get('show/{id}', [BrandController::class, 'show']);
    Route::post('store', [BrandController::class, 'store']);
    Route::post('update/{id}', [BrandController::class, 'update']);
    Route::post('updateSt/{id}', [BrandController::class, 'updateStatus']);
    Route::delete('destroy/{id}', [BrandController::class, 'destroy']);
});
Route::prefix('category')->group(function () {
    Route::get('index', [CategoryController::class, 'index']);
    Route::get('show/{id}', [CategoryController::class, 'show']);
    Route::post('store', [CategoryController::class, 'store']);
    Route::post('update/{id}', [CategoryController::class, 'update']);
    Route::delete('destroy/{id}', [CategoryController::class, 'destroy']);
    Route::post('updateSt/{id}', [CategoryController::class, 'updateStatus']);
});
Route::prefix('product')->group(function () {
    Route::get('index', [ProductController::class, 'index']);
    Route::get('show/{id}', [ProductController::class, 'show']);
    Route::post('store', [ProductController::class, 'store']);
    Route::post('update/{id}', [ProductController::class, 'update']);
    Route::delete('destroy/{id}', [ProductController::class, 'destroy']);
});
//user
Route::prefix('user')->group(function () {
    Route::get("index", [UserController::class, "index"]);
    Route::get("show/{id}", [UserController::class, "show"]);
    Route::post("store", [UserController::class, "store"]);
    Route::post("update/{id}", [UserController::class, "update"]);
    Route::post("trash/{id}", [UserController::class, "trash"]);
    Route::delete("destroy/{id}", [UserController::class, "destroy"]);
});
//banner
Route::prefix('banner')->group(function () {
    Route::get("index", [BannerController::class, "index"]);
    Route::get("show/{id}", [BannerController::class, "show"]);
    Route::post("store", [BannerController::class, "store"]);
    Route::post("update/{id}", [BannerController::class, "update"]);
    Route::post("trash/{id}", [BannerController::class, "trash"]);
    Route::delete("destroy/{id}", [BannerController::class, "destroy"]);
});
// Route::prefix('config')->group(function () {
//     Route::get('index', [ConfigController::class, 'index']);
//     Route::get('show/{id}', [ConfigController::class, 'show']);
//     Route::post('store', [ConfigController::class, 'store']);
//     Route::post('update/{id}', [ConfigController::class, 'update']);
//     Route::delete('destroy/{id}', [ConfigController::class, 'destroy']);
// });
Route::prefix('contact')->group(function () {
    Route::get('index', [ContactController::class, 'index']);
    Route::get('show/{id}', [ContactController::class, 'show']);
    Route::post('store', [ContactController::class, 'store']);
    Route::post('update/{id}', [ContactController::class, 'update']);
    Route::delete('destroy/{id}', [ContactController::class, 'destroy']);
});
Route::prefix('menu')->group(function () {
    Route::get('index', [MenuController::class, 'index']);
    Route::get('show/{id}', [MenuController::class, 'show']);
    Route::post('store', [MenuController::class, 'store']);
    Route::post('update/{id}', [MenuController::class, 'update']);
    Route::delete('destroy/{id}', [MenuController::class, 'destroy']);
});
Route::prefix('order')->group(function () {
    Route::get('index', [OrderController::class, 'index']);
    Route::get('show/{id}', [OrderController::class, 'show']);
    Route::post('store', [OrderController::class, 'store']);
    Route::post('update/{id}', [OrderController::class, 'update']);
    Route::delete('destroy/{id}', [OrderController::class, 'destroy']);
});
Route::prefix('orderDetail')->group(function () {
    Route::get('index', [OrderDetailController::class, 'index']);
    Route::get('show/{id}', [OrderDetailController::class, 'show']);
    Route::post('store', [OrderDetailController::class, 'store']);
    Route::post('update/{id}', [OrderDetailController::class, 'update']);
    Route::delete('destroy/{id}', [OrderDetailController::class, 'destroy']);
});
Route::prefix('topic')->group(function () {
    Route::get("index", [TopicController::class, "index"]);
    Route::get("show/{id}", [TopicController::class, "show"]);
    Route::post("store", [TopicController::class, "store"]);
    Route::post("update/{id}", [TopicController::class, "update"]);
    Route::post("trash/{id}", [TopicController::class, "trash"]);
    Route::delete("destroy/{id}", [TopicController::class, "destroy"]);
});
Route::prefix('post')->group(function () {
    Route::get("index", [PostController::class, "index"]);
    Route::get("show/{id}", [PostController::class, "show"]);
    Route::post("store", [PostController::class, "store"]);
    Route::post("update/{id}", [PostController::class, "update"]);
    Route::post("trash/{id}", [PostController::class, "trashpost"]);
    Route::delete("destroy/{id}", [PostController::class, "destroy"]);
});
Route::prefix('product')->group(function () {
    Route::get('index', [ProductController::class, 'index']);
    Route::get('show/{id}', [ProductController::class, 'show']);
    Route::post('store', [ProductController::class, 'store']);
    Route::post('update/{id}', [ProductController::class, 'update']);
    Route::delete('destroy/{id}', [ProductController::class, 'destroy']);
    Route::post('storesale', [ProductController::class, 'storeSale']);
    Route::post('import', [ProductController::class, 'import']);
    Route::get('indexStore', [ProductController::class, 'indexStore']);
    Route::get('indexSale', [ProductController::class, 'indexSale']);
});

// Route::post();
// Route::put();
// Route::delete();
