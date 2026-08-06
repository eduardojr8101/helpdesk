<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request): JsonResponse
    {
        $dados = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'string', 'min:6'],
        ]);

        $usuario = User::create([
            'name' => $dados['name'],
            'email' => $dados['email'],
            'password' => Hash::make($dados['password']),
        ]);

        return response()->json([
            'message' => 'Usuário cadastrado com sucesso.',
            'user' => $usuario,
        ], 201);
    }

    public function login(Request $request): JsonResponse
    {
        $dados = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        $usuario = User::where('email', $dados['email'])->first();


        if(!$usuario){
            return response()->json(['message' => 'Usuário não encontrado.'], 401);

        }
        if (!Hash::check($dados['password'], $usuario->password)) {
            return response()->json(['message' => 'Senha Incorreta!'], 401);
        }


        return response()->json([
            'message' => 'Login realizado com sucesso.',
            'user' => $usuario,
        ], 200);
    }
}