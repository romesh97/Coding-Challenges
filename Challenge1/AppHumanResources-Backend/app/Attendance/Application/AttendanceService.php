<?php

namespace App\Attendance\Application;

use App\imports\AttendanceImport;
use App\Models\Attendance\Domain\Attendance;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class AttendanceService
{
    //UPLOAD CSV FILE FUNCTION
    public static function uploadFile(Request $request)
    {
        Excel::import(new AttendanceImport, $request->file);

        return ('User table file imported successfully');

    }
}