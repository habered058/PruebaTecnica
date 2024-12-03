<?php

namespace App\Http\Controllers;

use App\Models\Space;
use Illuminate\Http\Request;
use Storage;

class SpaceController extends Controller
{
    public function index()
    {
        return response()->json(Space::all(), 200);
    }


    public function uploadPhoto($file)
    {
        if (!$file || !$file->isValid()) {
            throw new \Exception('Archivo inválido');
        }

        $filename = 'space_' . uniqid() . '.' . $file->getClientOriginalExtension();
        $path = $file->storeAs('spaces', $filename, 'public');
        return Storage::url($path);
    }

    public function store(Request $request)
    {
        error_log('Data Verificada');
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'capacity' => 'nullable|integer',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif'
        ]);

        error_log('Data Verificada');

        if ($request->hasFile('photo')) {
            try {
                $validatedData['photo'] = $this->uploadPhoto($request->file('photo'));
            } catch (\Exception $e) {
                return response()->json([
                    'message' => 'Error uploading photo',
                    'error' => $e->getMessage()
                ], 400);
            }
        }

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
