<?php

namespace App\Http\Controllers;

use App\Application\GroupByOwnersService;
use Illuminate\Http\Request;

class GroupByOwnersController extends Controller
{
    public function getGroupData(Request $request)
    {
        $data = GroupByOwnersService::getDocumentDetails($request);
        return $data;

    }
}
