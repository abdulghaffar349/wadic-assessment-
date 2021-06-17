<?php


namespace App\Services;


use App\Models\Currency;

class CurrencyService extends CrudService
{
    public function __construct()
    {
        $this->model(Currency::class);
    }
}
