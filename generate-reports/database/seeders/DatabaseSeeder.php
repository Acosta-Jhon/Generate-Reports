<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Role::factory(2)->create();
        \App\Models\User::factory(5)->create();
        \App\Models\Question::factory(5)->create();
        \App\Models\Job::factory(5)->create();
        \App\Models\City::factory(5)->create();
        \App\Models\Adress::factory(5)->create();
        \App\Models\Answer::factory(5)->create();
    }
}
