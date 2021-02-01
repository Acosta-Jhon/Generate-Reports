<?php

namespace Database\Factories;

use App\Models\Answer;
use Illuminate\Database\Eloquent\Factories\Factory;

class AnswerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Answer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'res_boleano' => $this->faker->randomElement(['Si', 'No']),
            'res_observacion' => $this->faker->text(100),
            'res_fecha' => $this->faker->date,
            'res_observacion_general' => $this->faker->text(200),
            /*ForeignKeys*/
            'usuario_id' => random_int(1, 50),
            'preguntas_id' => random_int(1, 100),
            'trabajos_id' => random_int(1, 20),
            'ciudades_id' => random_int(1, 15),
            'direccion_id' => random_int(1, 100),
        ];
    }
}
