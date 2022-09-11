<?php

namespace App\Attendance\Application;

use App\imports\AttendanceImport;
use App\Models\Attendance\Domain\Attendance;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class AttendanceService
{
    //Upload File CSV
    public static function uploadFile(Request $request)
    {
        Excel::import(new AttendanceImport, $request->file);

        return ('User table file imported successfully');

    }

    public static function getAttendanceDetails(Request $request)
    {
        $attendance = Attendance::with(['schedule.employee'])->get();

        return ($attendance);
    }

}