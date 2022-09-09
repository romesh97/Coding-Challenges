<?php

namespace App\Attendance\Application;

use App\Models\Attendance\Domain\Attendance;
use Maatwebsite\Excel\Facades\Excel;

class AttendanceService
{
    //UPLOAD CSV FILE FUNCTION
    public function uploadFile(Request $request)
    {
        Excel::import(new AttendanceImport, $request->file);

        return ('User Imported Successfully');

    }
}