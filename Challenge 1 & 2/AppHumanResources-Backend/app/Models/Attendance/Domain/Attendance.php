<?php

namespace App\Models\Attendance\Domain;

use App\Models\Attendance\Domain\Schedule;
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

    public function schedule()
    {
        return $this->belongsTo('App\Models\Attendance\Domain\Schedule');
    }
}