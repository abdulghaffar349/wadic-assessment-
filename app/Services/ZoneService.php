<?php


namespace App\Services;


use App\Models\Zone;

class ZoneService extends CrudService
{
    public function __construct()
    {
        $this->model(Zone::class);
    }
}
