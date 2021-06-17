<?php

namespace Database\Seeders;

use App\Services\ZoneService;
use Illuminate\Database\Seeder;

class ZoneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $zoneService = app(ZoneService::class);
        $zones = array(
            array('city' => 'Sydney', 'code' => 'AUS', 'price' => 0),
            array('city' => 'Brisbane', 'code' => 'AUS', 'price' => 0),
            array('city' => 'Perth', 'code' => 'AUS', 'price' => 0),
        );
        foreach ($zones as $zone) {
            $zoneService->_firstOrCreate(['city' => $zone['city']], $zone);
        }
    }
}
