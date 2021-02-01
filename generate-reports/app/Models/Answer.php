<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;

    public function users(){
        return $this->hasMany(User::class);
    }

    public function question(){
        return $this->belongsTo(Question::class);
    }

    public function job(){
        return $this->belongsTo(Job::class);
    }

    public function city(){
        return $this->belongsTo(City::class);
    }
    public function adress(){
        return $this->belongsTo(Adress::class);
    }
}
