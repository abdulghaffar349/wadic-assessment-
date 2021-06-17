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
//         \App\Models\User::factory(10)->create();
        $this->call(CurrencySeeder::class);
        $this->call(ZoneSeeder::class);
        $this->call(TierSeeder::class);
        $this->call(OperatingSystemSeeder::class);
    }
}
