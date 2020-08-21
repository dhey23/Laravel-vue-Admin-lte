<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
   
    public function index()
    {
        return User::latest()->paginate(10);
       
    }

    
    public function store(Request $request)
    {
        return User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['password'])
        ]);
        $this->validate($request,[
            'name' => 'required|string',
            'email'=> 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6'
        ]);
    }

   
    public function show()
    {
        $user = User::find($id);

        return Response::json($user);
    }


    public function update(Request $request, $id)
    {
        //
    }

 
    public function destroy($id)
    {
        $user = User::findOrFail($id);
    
        // delete process
        $user->delete();
     
        return ['message'=>'User has deleted', 'data_user'=>$user];
    }
}
