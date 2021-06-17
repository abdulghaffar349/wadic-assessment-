<?php

namespace Database\Seeders;

use App\Services\CurrencyService;
use Illuminate\Database\Seeder;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $currencyService = app(CurrencyService::class);
        $currencies = [
            array("name" => 'Australian Dollar', "code" => 'AUD', "rate" => 1.31),
            array("name" => 'Singapore Dollar', "code" => 'SGD', "rate" => 1.34)
        ];
        foreach ($currencies as $currency) {
            $currencyService->_firstOrCreate(['name' => $currency['name']], $currency);
        }
    }
}
