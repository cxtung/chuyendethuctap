<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use App\Models\Topic;

class TopicController extends Controller
{
    //
    function index()
    {
        $topic = Topic::all();
        $data = [
            'status' => true,
            'message' => 'Success.',
            'topic' => $topic,
        ];
        return response()->json($data);
    }
    //get show id
    function show($id)
    {
        $topic = Topic::find($id);
        if ($topic == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'topic' => null,
            ];
            return response()->json($data, 404);
        }
        $data = [
            'status' => true,
            'message' => 'Success.',
            'topic' => $topic,
        ];
        return response()->json($data);
    }
    function store(Request $request)
    {
        $topic = new Topic();
        $topic->title = $request->title;
        $topic->detail = "detail";
        $topic->type = "type";
        $topic->slug = Str::of($request->title)->slug('-');
        $topic->description = $request->description;
        $topic->status = $request->status;
        $image = request()->image;
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['png', 'jpg', 'gif', 'webp'])) {
                $fileName = date('ymdHis')  . '.' . $extension;
                $image->move(public_path('images/topic'), $fileName);
                $topic->image = $fileName;
            }
        }
        $topic->created_at = date('Y-m-d H:i:s');
        $topic->created_by = 1;

        if ($topic->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'topic' => $topic
            ];
            return response()->json($data);
        }
    }
    function update(Request $request, $id)
    {
        $topic = Topic::find($id);
        if ($topic == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'topic' => null,
            ];
            return response()->json($data, 404);
        }
        $topic->name = $request->name;
        $topic->slug = Str::of($request->name)->slug('-');
        $topic->sort_order = $request->sort_order;
        $topic->description = $request->description;
        $topic->status = $request->status;

        $topic->updated_at = date('Y-m-d H:i:s');
        $topic->updated_by = 1;

        if ($topic->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'topic' => $topic
            ];
            return response()->json($data);
        }
    }
    function trash(Request $request, $id)
    {
        $topic = Topic::find($id);
        if ($topic == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'topic' => null,
            ];
            return response()->json($data, 404);
        }
        $topic->status = $request->status;
        if ($topic->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'topic' => $topic
            ];
            return response()->json($data, 200);
        }
    }
    function destroy($id)
    {
        $topic = Topic::find($id);
        if ($topic == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'topic' => null,
            ];
            return response()->json($data, 404);
        }
        if ($topic->delete()) {
            $data = [
                'status' => true,
                'message' => 'Successfully Delete.',
                'topic' => null,
            ];
            return response()->json($data);
        }
    }
}
