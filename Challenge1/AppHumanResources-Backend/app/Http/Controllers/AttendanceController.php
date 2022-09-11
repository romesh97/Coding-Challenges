<?php

namespace App\Http\Controllers;

use App\Attendance\Application\AttendanceService;
use Illuminate\Http\Request;

class AttendanceController extends Controller
{

    public function csvFileImport(Request $request)
    {
        $data = AttendanceService::uploadFile($request);
        return $data;
    }

    public function getAttendanceInfo(Request $request)
    {
        $data = AttendanceService::getAttendanceDetails($request);
        return $data;
    }
}