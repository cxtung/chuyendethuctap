<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\User;


class UserController extends Controller
{
    //
    function index()
    {
        $user = User::all();
        $data = [
            'status' => true,
            'message' => 'Success.',
            'user' => $user,
        ];
        return response()->json($data);
    }
    //get show id
    function show($id)
    {
        $user = User::find($id);
        if ($user == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'user' => null,
            ];
            return response()->json($data, 404);
        }
        $data = [
            'status' => true,
            'message' => 'Success.',
            'user' => $user,
        ];
        return response()->json($data);
    }
    function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->username = $request->username;
        $user->password = $request->password;
        $user->gender = $request->gender;
        $user->phone = $request->phone;
        $user->email = $request->email;
        $user->roles = $request->roles;
        $user->status = $request->status;

        $user->created_at = date('Y-m-d H:i:s');

        if ($user->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'user' => $user
            ];
            return response()->json($data);
        }
    }
    function update(Request $request, $id)
    {
        $user = User::find($id);
        if ($user == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'user' => null,
            ];
            return response()->json($data, 404);
        }
        $user->name = $request->name;
        $user->username = $request->username;
        $user->password = $request->password;
        $user->gender = $request->gender;
        $user->phone = $request->phone;
        $user->email = $request->email;
        $user->roles = $request->roles;
        $user->status = $request->status;

        $user->updated_at = date('Y-m-d H:i:s');

        if ($user->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'user' => $user
            ];
            return response()->json($data);
        }
    }
    function trash(Request $request, $id)
    {
        $user = User::find($id);
        if ($user == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'user' => null,
            ];
            return response()->json($data, 404);
        }
        $user->status = $request->status;
        if ($user->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'user' => $user
            ];
            return response()->json($data, 200);
        }
    }
    function destroy($id)
    {
        $user = User::find($id);
        if ($user == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'user' => null,
            ];
            return response()->json($data, 404);
        }
        if ($user->delete()) {
            $data = [
                'status' => true,
                'message' => 'Successfully Delete.',
                'user' => null,
            ];
            return response()->json($data);
        }
    }
}
