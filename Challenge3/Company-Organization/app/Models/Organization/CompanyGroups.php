<?php

namespace App\Models\Organization;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyGroups extends Model
{
    use HasFactory;

    public function company()
    {
        return $this->belongsTo('App\Models\Organization\Company');
    }

    public function subGroups()
    {
        return $this->hasMany('App\Models\Organization\SubGroups');
    }

    public function employees()
    {
        return $this->hasMany('App\Models\Organization\Employee');
    }
}