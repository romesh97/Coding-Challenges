<?php

namespace App\Models\Attendance\Domain;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class Attendance extends Model implements WithHeadingRow
{
    use HasFactory;
    protected $fillable = [
        'employee_id',
        'schedule_id',
    ];
}