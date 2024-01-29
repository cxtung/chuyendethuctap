<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    //
    function index()
    {
        $banner = Banner::all();
        $data = [
            'status' => true,
            'message' => 'Success.',
            'banner' => $banner,
        ];
        return response()->json($data);
    }

    //get show id
    function show($id)
    {
        $banner = Banner::find($id);
        if ($banner == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'banner' => null,
            ];
            return response()->json($data, 404);
        }
        $data = [
            'status' => true,
            'message' => 'Success.',
            'banner' => $banner,
        ];
        return response()->json($data);
    }

    function store(Request $request)
    {
        $banner = new Banner();
        $banner->name = $request->name;
        $banner->image = $request->image;
        $banner->link = $request->link;
        $banner->position = $request->position;
        $banner->description = $request->description;
        $banner->status = $request->status;

        $banner->created_at = date('Y-m-d H:i:s');
        $banner->created_by = 1;
        $image = request()->image;
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['png', 'jpg', 'gif', 'webp'])) {
                $fileName = date('ymdHis')  . '.' . $extension;
                $image->move(public_path('images/banner'), $fileName);
                $banner->image = $fileName;
            }
        }

        if ($banner->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'banner' => $banner
            ];
            return response()->json($data);
        }
    }
    function update(Request $request, $id)
    {
        $banner = Banner::find($id);
        if ($banner == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'banner' => null,
            ];
            return response()->json($data, 404);
        }
        $banner->name = $request->name;
        $banner->image = $request->image;
        $banner->link = $request->link;
        $banner->position = $request->position;
        $banner->description = $request->description;
        $banner->status = $request->status;

        $banner->updated_at = date('Y-m-d H:i:s');
        $banner->updated_by = 1;
        $image = request()->image;
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['png', 'jpg', 'gif', 'webp'])) {
                $fileName = date('ymdHis')  . '.' . $extension;
                $image->move(public_path('images/banner'), $fileName);
                $banner->image = $fileName;
            }
        }

        if ($banner->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'banner' => $banner
            ];
            return response()->json($data);
        }
    }
    function trash(Request $request, $id)
    {
        $banner = Banner::find($id);
        if ($banner == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'banner' => null,
            ];
            return response()->json($data, 404);
        }
        $banner->status = $request->status;
        if ($banner->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'banner' => $banner
            ];
            return response()->json($data, 200);
        }
    }
    function destroy($id)
    {
        $banner = Banner::find($id);
        if ($banner == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'banner' => null,
            ];
            return response()->json($data, 404);
        }
        if ($banner->delete()) {
            $data = [
                'status' => true,
                'message' => 'Successfully Delete.',
                'banner' => null,
            ];
            return response()->json($data);
        }
    }
}
