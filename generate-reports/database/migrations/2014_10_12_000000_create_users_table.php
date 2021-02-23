<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('usu_nombre')->nullable();
            $table->string('usu_apellido')->nullable();
            $table->string('usu_email')->unique()->nullable();
            $table->string('usu_email_alternativo')->nullable();
            $table->string('usu_contrasena')->nullable();
            $table->string('usu_genero')->nullable();
            $table->string('usu_direccion')->nullable();
            $table->string('usu_telefono')->nullable();
            /*Foreign Key */
            $table->unsignedBigInteger('rol_id');
            $table->foreign('rol_id')->references('id')
            ->on('roles');
            //->onUpdate('cascade')->onDelete('cascade');

            $table->rememberToken();
            $table->timestamps();


        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
}
