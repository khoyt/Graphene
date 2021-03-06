<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = ['group_id','name','ext','filename','mime_type'];

    public function group() {
      return $this->belongsTo(Group::class);
    }
}
