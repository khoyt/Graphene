<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAppInstancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('app_instances', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('app_id')->unsigned()->index();
            $table->integer('group_id')->unsigned()->index();
            $table->integer('app_version_id')->unsigned()->nullable()->default(null);
            $table->string('name');
            $table->string('slug');
            $table->string('icon')->nullable()->default(null);
            $table->integer('order')->unsigned()->default(2147483647);
            $table->tinyInteger('device')->unsigned()->nullable();
            $table->boolean('unlisted')->default(false);
            $table->boolean('public')->default(false);
            $table->json('groups')->nullable();
            $table->json('options')->nullable();
            $table->json('user_options_default')->nullable();
            $table->json('resources')->nullable();
            $table->timestamps();
            $table->foreign('app_id')->references('id')->on('apps');
            $table->foreign('group_id')->references('id')->on('groups');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('app_instances');
    }
}
