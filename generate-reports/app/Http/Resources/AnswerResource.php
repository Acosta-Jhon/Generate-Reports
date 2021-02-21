<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AnswerResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'res_fecha' => $this->res_fecha,
            'res_observacion' => $this->res_observacion,
            'res_observacion_general' => $this->res_observacion_general
        ];
    }
}
