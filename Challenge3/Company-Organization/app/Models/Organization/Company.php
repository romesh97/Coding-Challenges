<?php

namespace App\Models\Organization;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    public function location()
    {
        return $this->hasOne('App\Models\Organization\Location');
    }

    public function companyGroups()
    {
        return $this->hasMany('App\Models\Organization\CompanyGroups');
    }

    public function assets()
    {
        return $this->hasMany('App\Models\Organization\Asset');
    }
}