<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Post;


class PostController extends Controller
{

    //
    function index()
    {
        $post = Post::all();
        $data = [
            'status' => true,
            'message' => 'Success.',
            'post' => $post,
        ];
        return response()->json($data);
    }
    //get show id
    function show($id)
    {
        $post = Post::find($id);
        if ($post == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'post' => null,
            ];
            return response()->json($data, 404);
        }
        $data = [
            'status' => true,
            'message' => 'Success.',
            'post' => $post,
        ];
        return response()->json($data);
    }
    function store(Request $request)
    {
        $post = new Post();
        $post->topic_id = $request->topic_id;
        $post->title = $request->title;
        $post->slug = Str::of($request->title)->slug('-');
        $post->detail = $request->detail;
        $post->description = $request->description;
        $post->type = $request->type;
        $post->status = $request->status;

        $post->created_at = date('Y-m-d H:i:s');
        $post->created_by = 1;
        $image = request()->image;
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['png', 'jpg', 'gif', 'webp'])) {
                $fileName = date('ymdHis')  . '.' . $extension;
                $image->move(public_path('images/post'), $fileName);
                $post->image = $fileName;
            }
        }
        if ($post->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'post' => $post
            ];
            return response()->json($data);
        }
    }
    function update(Request $request, $id)
    {
        $post = Post::find($id);
        if ($post == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'post' => null,
            ];
            return response()->json($data, 404);
        }
        $post->topic_id = $request->topic_id;
        $post->title = $request->title;
        $post->slug = Str::of($request->title)->slug('-');
        $post->detail = $request->detail;
        $post->description = $request->description;
        $post->type = $request->type;
        $post->status = $request->status;

        $post->updated_at = date('Y-m-d H:i:s');
        $post->updated_by = 1;
        $image = request()->image;
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['png', 'jpg', 'gif', 'webp'])) {
                $fileName = date('ymdHis')  . '.' . $extension;
                $image->move(public_path('images/post'), $fileName);
                $post->image = $fileName;
            }
        }
        if ($post->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'post' => $post
            ];
            return response()->json($data);
        }
    }

    function trashpost(Request $request, $id)
    {
        $post = Post::find($id);
        if ($post == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'post' => null,
            ];
            return response()->json($data, 404);
        }
        $post->status = $request->status;
        if ($post->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'post' => $post
            ];
            return response()->json($data, 200);
        }
    }
    function destroy($id)
    {
        $post = Post::find($id);
        if ($post == null) {
            $data = [
                'status' => false,
                'message' => 'Error.',
                'post' => null,
            ];
            return response()->json($data, 404);
        }
        if ($post->delete()) {
            $data = [
                'status' => true,
                'message' => 'Successfully Delete.',
                'post' => null,
            ];
            return response()->json($data);
        }
    }
}
