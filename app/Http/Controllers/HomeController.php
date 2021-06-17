<?php

namespace App\Http\Controllers;

use App\Services\CurrencyService;
use App\Services\OperatingSystemService;
use App\Services\TierService;
use App\Services\ZoneService;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    protected $zoneService, $tierService, $operatingSystemService, $currencyService;

    public function __construct(ZoneService $zoneService, TierService $tierService, OperatingSystemService $operatingSystemService,
                                CurrencyService $currencyService)
    {
        $this->zoneService = $zoneService;
        $this->currencyService = $currencyService;
        $this->operatingSystemService = $operatingSystemService;
        $this->tierService = $tierService;
    }

    public function index()
    {
        return view('welcome');
    }

    public function products(): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            "data" => array(
                "currencies" => $this->currencyService->_all(),
                "tiers" => $this->tierService->_all(),
                "zones" => $this->zoneService->_all(),
                "operating_systems" => $this->operatingSystemService->_all()
            )]);
    }
}
