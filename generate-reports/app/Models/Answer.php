<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;

    public function users(){
        return $this->hasMany(User::Class);
    }

    public function question(){
        return $this->belongsTo(Question::Class);
    }

    public function job(){
        return $this->belongsTo(Job::Class);
    }

    public function city(){
        return $this->belongsTo(City::Class);
    }
    public function adress(){
        return $this->belongsTo(Adress::Class);
    }
}
