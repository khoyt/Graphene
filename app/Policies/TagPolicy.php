<?php

namespace App\Policies;

use App\User;
use App\Tag;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Http\Request;

class TagPolicy
{
    use HandlesAuthorization;

    public function get_all(User $user)
    {
        // User must be an admin of one or more groups
        if (count($user->admin_groups)>0) {
            return true;
        }
    }

    public function create(User $user)
    {
        // User must be admin of tag group
        if (in_array(request()->group_id,$user->admin_groups)) {
            return true;
        }
    }

    public function update(User $user, Tag $tag)
    {
        // User must be admin of tag group
        if (in_array($tag->group_id,$user->admin_groups)) {
            return true;
        }
    }

    public function delete(User $user, Tag $tag)
    {
        // User must be admin of tag group
        if (in_array($tag->group_id,$user->admin_groups)) {
            return true;
        }
    }
}