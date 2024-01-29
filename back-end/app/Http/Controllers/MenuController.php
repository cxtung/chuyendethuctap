<?php

namespace App\Http\Controllers;

use App\Models\Menu;

use Illuminate\Support\Str;

use Illuminate\Http\Request;

class MenuController extends Controller
{
    //
    function index()
    {
        $menu = Menu::all();
        $data = [
            'status' => true,
            'message' => 'Success.',
            'menu' => $menu,
        ];
        return response()->json($data);
    }
    //get show id
    function show($id)
    {
        $menu = Menu::find($id);
        if ($menu == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'menu' => null,
            ];
            return response()->json($data, 404);
        }
        $data = [
            'status' => true,
            'message' => 'Success.',
            'menu' => $menu,
        ];
        return response()->json($data);
    }
    function store(Request $request)
    {
        $menu = new Menu();
        $menu->name = $request->name;
        $menu->link = $request->link;
        $menu->sort_order = $request->sort_order;
        $menu->parent_id = $request->parent_id;
        $menu->type = $request->type;
        $menu->table_id = $request->table_id;
        $menu->description = $request->description;
        $menu->status = $request->status;

        $menu->created_at = date('Y-m-d H:i:s');
        $menu->created_by = 1;

        if ($menu->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'menu' => $menu
            ];
            return response()->json($data);
        }
    }
    function update(Request $request, $id)
    {
        $menu = Menu::find($id);
        if ($menu == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'menu' => null,
            ];
            return response()->json($data, 404);
        }
        $menu->name = $request->name;
        $menu->link = $request->link;
        $menu->sort_order = $request->sort_order;
        $menu->parent_id = $request->parent_id;
        $menu->type = $request->type;
        $menu->table_id = $request->table_id;
        $menu->description = $request->description;
        $menu->status = $request->status;

        $menu->updated_at = date('Y-m-d H:i:s');
        $menu->updated_by = 1;

        if ($menu->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'menu' => $menu
            ];
            return response()->json($data);
        }
    }
    function trash(Request $request, $id)
    {
        $menu = Menu::find($id);
        if ($menu == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'menu' => null,
            ];
            return response()->json($data, 404);
        }
        $menu->status = $request->status;
        if ($menu->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'menu' => $menu
            ];
            return response()->json($data, 200);
        }
    }
    function destroy($id)
    {
        $menu = Menu::find($id);
        if ($menu == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'menu' => null,
            ];
            return response()->json($data, 404);
        }
        if ($menu->delete()) {
            $data = [
                'status' => true,
                'message' => 'Successfully Delete.',
                'menu' => null,
            ];
            return response()->json($data);
        }
    }
}
