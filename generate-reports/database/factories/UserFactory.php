<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $genero = $this->faker->randomElement(['Masculino', 'Femenino']);

        return [
            'usu_nombre' => $this->faker->name($genero),
            'usu_apellido' => $this->faker->lastName,
            'usu_email' => $this->faker->unique()->safeEmail,
            'usu_email_alternativo' => $this->faker->safeEmail,
            'usu_contrasena' => $this->faker->password,
            'usu_genero' => $genero,
            'usu_direccion' => $this->faker->address,
            'usu_telefono' => $this->faker->phoneNumber,
            'rol_id' => rand(1, 2),
            'remember_token' => Str::random(10)
        ];
    }
}
