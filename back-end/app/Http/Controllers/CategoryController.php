<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Category;

class CategoryController extends Controller
{
    //get list
    function index()
    {
        $categories = Category::all();
        $data = [
            'status' => true,
            'message' => "Success",
            'categories' => $categories,
        ];
        return response()->json($data, 200);
    }
    //get show id
    function show($id)
    {
        $Category = Category::find($id);
        if ($Category == null) {
            $data = [
                'status' => true,
                'message' => 'Error',
                //dữ liệu trả về
                'categories' => null
            ];
            return response()->json($data, 404);
        } else {
            $data = [
                'status' => true,
                'message' => 'Success',
                //dữ liệu trả về
                'categories' => $Category
            ];
            return response()->json($data, 200);
        }
    }
    //thêm
    function store(Request $request)
    {
        $Category = new Category();
        $Category->name = $request->name;
        $Category->slug = Str::of($request->name)->slug('-');
        $Category->sort_order = 1;
        $Category->parent_id = 1;
        $Category->status = $request->status;
        $Category->description = $request->description;
        $Category->created_at = date('Y-m-d H:i:s');
        $Category->created_by = 1; //login
        $image = $request->image;
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['png', 'jpg', 'gif', 'webp'])) {
                $fileName = date('ymdHis')  . '.' . $extension;
                $image->move(public_path('images/Category'), $fileName);
                $Category->image = $fileName;
            }
        }

        if ($Category->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'Categorys' => $Category
            ];
        }
    }
    //xóa
    public function destroy($id)
    {
        $Category = Category::find($id);
        if ($Category == null) {
            $data = [
                'status' => true,
                'message' => 'Error',
                'categories' => null
            ];
            return response()->json($data, 404);
        }
        if ($Category->delete()) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'categories' => null
            ];
            return response()->json($data, 200);
        }
    }
    //cập nhật
    public function update(Request $request, $id)
    {
        $Category = Category::find($id);
        $Category->name = $request->name; //form
        $Category->slug = Str::of($request->name)->slug('-');
        $Category->description = $request->description;

        //
        $Category->sort_order = 1; //form
        // $Category->metakey = $request->metakey; //form
        // $Category->metadesc = $request->metadesc; //form
        $Category->updated_at = date('Y-m-d H:i:s');
        $Category->updated_by = 1;
        $Category->status = $request->status; //form
        //upload image
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $Category->slug . '.' . $extension;
                $Category->image = $filename;
                $files->move(public_path('images/Category'), $filename);
            }
        }
        $Category->save(); //Luuu vao CSDL
        return response()->json(
            [
                'success' => true,
                'message' => 'Thành công',
                'Category' => $Category
            ],
            200
        );
    }
    function updateStatus(Request $request, $id)
    {
        $categoty = Category::find($id);
        if ($categoty == null) {
            $data = [
                'status' => true,
                'message' => 'Error',
                //dữ liệu trả về
                'categories' => null
            ];
            return response()->json($data, 404);
        }
        $categoty->status = $request->status;
        if ($categoty->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'categories' => $categoty
            ];
            return response()->json($data, 200);
        }
    }
}
