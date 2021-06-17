<?php


namespace App\Services;


use App\Models\OperatingSystem;

class OperatingSystemService extends CrudService
{
    public function __construct()
    {
        $this->model(OperatingSystem::class);
    }
}
