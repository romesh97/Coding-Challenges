<?php

namespace App\Models\Organization;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class People extends Model
{
    use HasFactory;

    public function employees()
    {
        return $this->hasMany('App\Models\Organization\Employee');
    }

    public function managers()
    {
        return $this->hasMany('App\Models\Organization\Manager');
    }

    public function company()
    {
        return $this->belongsTo('App\Models\Organization\Company');
    }
}