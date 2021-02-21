<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AdressResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'direc_calle_principal' => $this->direc_calle_principal,
            'direc_calle_secundaria' => $this->direc_calle_secundaria
        ];
    }
}
