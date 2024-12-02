<?php

namespace App\Http\Controllers;

use App\Models\Space;
use Illuminate\Http\Request;

class SpaceController extends Controller
{
    // Listar todos los espacios (Read)
    public function index()
    {
        return response()->json(Space::all(), 200);
    }

    // Crear un nuevo espacio (Create)
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'capacity' => 'nullable|integer',
        ]);

        $space = Space::create($validatedData);

        return response()->json($space, 201);
    }

    // Mostrar un espacio específico (Read)
    public function show($id)
    {
        $space = Space::find($id);

        if (!$space) {
            return response()->json(['message' => 'Space not found'], 404);
        }

        return response()->json($space, 200);
    }

    // Actualizar un espacio (Update)
    public function update(Request $request, $id)
    {
        $space = Space::find($id);

        if (!$space) {
            return response()->json(['message' => 'Space not found'], 404);
        }

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'capacity' => 'nullable|integer'
        ]);

        $space->update($validatedData);

        return response()->json($space, 200);
    }

    // Eliminar un espacio (Delete)
    public function destroy($id)
    {
        $space = Space::find($id);

        if (!$space) {
            return response()->json(['message' => 'Space not found'], 404);
        }

        $space->delete();

        return response()->json(['message' => 'Space deleted'], 200);
    }
}
