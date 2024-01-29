<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Orderdetail;


class OrderdetailController extends Controller
{
    //
    function index()
    {
        $orderdetail = Orderdetail::all();
        $data = [
            'status' => true,
            'message' => 'Success.',
            'orderdetail' => $orderdetail,
        ];
        return response()->json($data);
    }
    //get show id
    function show($id)
    {
        $orderdetail = Orderdetail::find($id);
        if ($orderdetail == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'orderdetail' => null,
            ];
            return response()->json($data, 404);
        }
        $data = [
            'status' => true,
            'message' => 'Success.',
            'orderdetail' => $orderdetail,
        ];
        return response()->json($data);
    }
    function store(Request $request)
    {
        $orderdetail = new Orderdetail;
        $orderdetail->created_at = date('Y-m-d H:i:s');
        if ($orderdetail->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'orderdetail' => $orderdetail
            ];
            return response()->json($data);
        }
    }
    function update(Request $request, $id)
    {
        $orderdetail = Orderdetail::find($id);
        if ($orderdetail == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'orderdetail' => null,
            ];
            return response()->json($data, 404);
        }
        $orderdetail->updated_at = date('Y-m-d H:i:s');
        if ($orderdetail->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'orderdetail' => $orderdetail
            ];
            return response()->json($data);
        }
    }
    function destroy($id)
    {
        $orderdetail = Orderdetail::find($id);
        if ($orderdetail == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'orderdetail' => null,
            ];
            return response()->json($data, 404);
        }
        if ($orderdetail->delete()) {
            $data = [
                'status' => true,
                'message' => 'Successfully Delete.',
                'orderdetail' => null,
            ];
            return response()->json($data);
        }
    }
}
