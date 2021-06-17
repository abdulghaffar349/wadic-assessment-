<?php

namespace Database\Seeders;

use App\Services\TierService;
use Illuminate\Database\Seeder;

class TierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tierService = app(TierService::class);
        $tiers = array(
            array(
                'name' => 'Basic servers',
                'code' => 'ioSTOR-250',
                'price' => 0.11,
            ),
            array(
                'name' => 'Mid tier',
                'code' => 'ioSTOR-500',
                'price' => 0.2,
            ),
            array(
                'name' => 'Backup',
                'code' => 'ioSTOR-100',
                'price' => 0.069,
            ),
            array(
                'name' => 'High performance',
                'code' => 'ioSTOR-1000',
                'price' => 0.33,
            ),
        );
        foreach ($tiers as $tier) {
            $tierService->_firstOrCreate(['name' => $tier['name']], $tier);
        }
    }
}
