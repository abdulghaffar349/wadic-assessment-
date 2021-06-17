<?php

namespace Database\Seeders;

use App\Services\OperatingSystemService;
use Illuminate\Database\Seeder;

class OperatingSystemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $operatingSystemService = app(OperatingSystemService::class);
        $operatingSystems = array(
            array(
                'name' => 'CentOS Server 7',
                'price' => 0,
            ),
            array(
                'name' => 'CentOS Server 8',
                'price' => 0,
            ),
            array(
                'name' => 'Debian Server 9',
                'price' => 0,
            ),
            array(
                'name' => 'Debian Server 10',
                'price' => 0,
            ),
        );
        foreach ($operatingSystems as $operatingSystem) {
            $operatingSystemService->_firstOrCreate(['name' => $operatingSystem['name']], $operatingSystem);
        }

    }
}
