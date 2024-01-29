<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Contact;


class ContactController extends Controller
{

    //get list
    function index()
    {
        $Contacts = Contact::all();
        $data = [
            'status' => true,
            'message' => "Success",
            'Contacts' => $Contacts,
        ];
        return response()->json($data, 200);
    }
    //get show id
    function show($id)
    {
        $Contact = Contact::find($id);
        if ($Contact == null) {
            $data = [
                'status' => true,
                'message' => 'Erroro',
                //dữ liệu trả về
                'Contacts' => null
            ];
            return response()->json($data, 404);
        } else {
            $data = [
                'status' => true,
                'message' => 'Success',
                //dữ liệu trả về
                'Contacts' => $Contact
            ];
            return response()->json($data, 200);
        }
    }
    //thêm
    function store(Request $request)
    {
        $contact = new Contact();
        $contact->user_id = $request->user_id;
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->phone = $request->phone;
        $contact->title = $request->title;
        $contact->content = $request->content;
        $contact->replay_id = $request->replay_id;
        $contact->status = $request->status;
        $contact->created_at = date('Y-m-d H:i:s');
        $contact->created_by = 1;
        if ($contact->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'contacts' => $contact
            ];
            return response()->json($data, 200);
        }
    }
    //xóa
    function destroy($id)
    {
        $Contact = Contact::find($id);
        if ($Contact == null) {
            $data = [
                'status' => true,
                'message' => 'Error',
                //dữ liệu trả về
                'Contacts' => null
            ];
            return response()->json($data, 404);
        }
        if ($Contact->delete()) {
            $data = [
                'status' => true,
                'message' => 'Success',
                //dữ liệu trả về
                'Contacts' => null
            ];
            return response()->json($data, 200);
        }
    }
    //cập nhật
    public function update(Request $request, $id)
    {
        $contact = Contact::find($id);
        if ($contact == null) {
            $data = [
                'status' => true,
                'message' => 'Error',
                //dữ liệu trả về
                'contacts' => null
            ];
            return response()->json($data, 404);
        }
        $contact->user_id = $request->user_id;
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->phone = $request->phone;
        $contact->title = $request->title;
        $contact->content = $request->content;
        $contact->replay_id = $request->replay_id;
        $contact->status = $request->status;
        $contact->updated_at = date('Y-m-d H:i:s');
        $contact->updated_by = 1;
        if ($contact->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'contacts' => $contact
            ];
            return response()->json($data, 200);
        }
    }
    function updateStatus(Request $request, $id)
    {
        $Contact = Contact::find($id);
        if ($Contact == null) {
            $data = [
                'status' => true,
                'message' => 'Error',
                //dữ liệu trả về
                'Contacts' => null
            ];
            return response()->json($data, 404);
        }
        $Contact->status = $request->status;
        if ($Contact->save() == true) {
            $data = [
                'status' => true,
                'message' => 'Success',
                'Contacts' => $Contact
            ];
            return response()->json($data, 200);
        }
    }
}
