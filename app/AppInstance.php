<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AppInstance extends Model
{
    protected $fillable = ['name', 'slug', 'public', 'configuration', 'resources','icon'];

    protected $casts = ['configuration' => 'object', 'resources' => 'object'];

    public function group() {
      return $this->belongsTo(Group::class);
    }
    public function app() {
      return $this->belongsTo(App::class);
    }
    public function user_options() {
      return $this->hasOne(UserOption::class);
    }
    public function set_user_options($user, $user_options)
    {
        if(!is_null(UserOption::where(['user_id'=>$user->id, 'app_instance_id'=>$this->id])->first())) {
            UserOption::where('app_instance_id', $this->id)->where('user_id',$user->id)->delete();
        }
        return UserOption::updateOrCreate(['app_instance_id'=>$this->id, 'user_id'=>$user->id],
          ['options'=>$user_options]);
    }    
}
