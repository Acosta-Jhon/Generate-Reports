<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdressesTable extends Migration
{
    public function up()
    {
        Schema::create('adresses', function (Blueprint $table) {
            $table->id();
            $table->string('direc_calle_principal');
            $table->string('direc_calle_secundaria');
            $table->timestamps();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('adresses');
    }
}
