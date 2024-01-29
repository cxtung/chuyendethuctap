<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Order;
use App\Models\User;


class OrderController extends Controller
{
    //
    function index()
    {
        $order = Order::all();
        $data = [
            'status' => true,
            'message' => 'Success.',
            'order' => $order,
        ];
        return response()->json($data);
    }
    //get show id
    function show($id)
    {
        $order = Order::find($id);
        if ($order == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'order' => null,
            ];
            return response()->json($data, 404);
        }
        $data = [
            'status' => true,
            'message' => 'Success.',
            'order' => $order,
        ];
        return response()->json($data);
    }
    function store(Request $request)
    {
        $order = new Order();
        $user = new User();
        $order->user_id = $request->user_id;
        $order->delivery_name = $request->delivery_name;
        $order->delivery_gender = $request->delivery_gender;
        $order->delivery_email = $request->delivery_email;
        $order->delivery_phone = $request->delivery_phone;
        $order->delivery_address = $request->delivery_address;
        $order->note = $request->note;
        $order->status = $request->status;

        $order->created_at = date('Y-m-d H:i:s');
        $order->created_by = 1;
        if ($order->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'order' => $order
            ];
            return response()->json($data);
        }
    }
    function update(Request $request, $id)
    {
        $order = Order::find($id);
        if ($order == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'order' => null,
            ];
            return response()->json($data, 404);
        }
        $order = new Order();
        $user = new User();
        $order->user_id = $request->user_id;
        $order->delivery_name = $user->delivery_name;
        $order->delivery_gender = $user->delivery_gender;
        $order->delivery_email = $user->delivery_email;
        $order->delivery_phone = $user->delivery_phone;
        $order->delivery_address = $user->delivery_address;
        $order->note = $request->note;
        $order->status = $request->status;

        $order->updated_at = date('Y-m-d H:i:s');
        $order->updated_by = 1;
        $image = request()->image;
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['png', 'jpg', 'gif', 'webp'])) {
                $fileName = date('ymdHis')  . '.' . $extension;
                $image->move(public_path('images/order'), $fileName);
                $order->image = $fileName;
            }
        }
        if ($order->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'order' => $order
            ];
            return response()->json($data);
        }
    }
    function destroy($id)
    {
        $order = Order::find($id);
        if ($order == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'order' => null,
            ];
            return response()->json($data, 404);
        }
        if ($order->delete()) {
            $data = [
                'status' => true,
                'message' => 'Successfully Delete.',
                'order' => null,
            ];
            return response()->json($data);
        }
    }
}
