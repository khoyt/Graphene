<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Link extends Model
{
    protected $fillable = ['group_id','link','title','icon','image','color','order'];
    protected $table = 'links';

    public function group() {
      return $this->belongsTo(Group::class);
    }
}
