<?php


namespace App\Services;


use App\Models\Tier;

class TierService extends CrudService
{

    public function __construct()
    {
        $this->model(Tier::class);
    }
}
