<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'usu_nombre' => $this->usu_nombre,
            'usu_apellido' => $this->usu_apellido,
            'usu_email' => $this->usu_email,
            'usu_email_alternativo' => $this->usu_email_alternativo,
            'usu_contrasena' => $this->usu_contrasena,
            'usu_genero' => $this->usu_genero,
            'usu_direccion' => $this->usu_direccion,
            'usu_telefono' => $this->usu_telefono,
            'rol_id' => $this->rol_id,
        ];
    }
}
