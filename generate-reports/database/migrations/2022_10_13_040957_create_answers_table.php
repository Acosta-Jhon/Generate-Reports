<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnswersTable extends Migration
{
    public function up()
    {
        Schema::create('answers', function (Blueprint $table) {
            $table->id();
            $table->string('res_boleano');
            $table->string('res_observacion');
            $table->string('res_fecha');
            $table->string('res_observacion_general');
            /* Foreign keys */
            $table->unsignedBigInteger('usuario_id');
            $table->unsignedBigInteger('preguntas_id');
            $table->unsignedBigInteger('trabajos_id');
            $table->unsignedBigInteger('ciudades_id');
            $table->unsignedBigInteger('direccion_id');
            $table->timestamps();
            /* relacion a la tabla usurio */
            $table->foreign('usuario_id')->references('id')
                ->on('users'); //->onUpdate('cascade')->onDelete('cascade');
            /* relacion a la tabla preguntas */
            $table->foreign('preguntas_id')->references('id')
                ->on('questions')->onUpdate('cascade')->onDelete('cascade');
            /* /* relacion a la tabla trabajos */
            $table->foreign('trabajos_id')->references('id')
                ->on('jobs')->onUpdate('cascade')->onDelete('cascade');
            /* relacion a la tabla ciudades */
            $table->foreign('ciudades_id')->references('id')
                ->on('cities')->onUpdate('cascade')->onDelete('cascade');
            /* relacion a la tabla dirección */
            $table->foreign('direccion_id')->references('id')
                ->on('adresses')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('answers');
    }
}
