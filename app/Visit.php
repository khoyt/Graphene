<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Visit extends Model
{
    public $timestamps = false;
    protected $fillable = ['user_id','path','resource_type','resource_id','referrer','width'];

    public function user() {
      return $this->belongsTo(User::class);
    }
}

