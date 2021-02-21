<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'pre_descripcion' => $this->pre_descripcion,
            'pre_numero' => $this->pre_numero
        ];
    }
}
