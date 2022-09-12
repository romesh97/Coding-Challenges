<?php

namespace App\Models\Organization;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubGroups extends Model
{
    use HasFactory;

    public function companyGroups()
    {
        return $this->belongsTo('App\Models\Organization\CompanyGroups');
    }
}