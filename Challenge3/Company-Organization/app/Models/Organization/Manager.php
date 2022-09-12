<?php

namespace App\Models\Organization;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Manager extends Model
{
    use HasFactory;

    public function managers()
    {
        return $this->belongsTo('App\Models\Organization\Company');
    }

     public function people()
    {
        return $this->belongsTo('App\Models\Organization\People');
    }
}