<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AnswerResource extends JsonResource
{
    public function toArray($request)
    {
        /*return [
            'id' => $this->id,
            'res_boleano' => $this->res_boleano,
            'res_fecha' => $this->res_fecha,
            'res_observacion' => $this->res_observacion,
            'res_observacion_general' => $this->res_observacion_general,
            'usuario_id' => $this->usuario_id,
            'preguntas_id' => $this->preguntas_id,
            'trabajos_id' => $this->trabajos_id,
            'ciudades_id'=> $thisthis->ciudades_id,
            'direccion_id' => $this->direccion_id,
        ];*/
        return parent::toArray($request);
    }
}
