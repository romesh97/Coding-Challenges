<?php

namespace App\Models\Organization;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    public function companyGroup()
    {
        return $this->belongsTo('App\Models\Organization\CompanyGroup');
    }

    public function people()
    {
        return $this->belongsTo('App\Models\Organization\People');
    }
}