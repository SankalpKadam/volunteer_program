<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('graduates', function (Blueprint $table) {
            $table->id();
            $table->string('student_name');
            $table->date('student_graduation_date');
            $table->string('student_email')->unique();
            $table->string('student_password');
            $table->string('student_phone_number')->unique();
            // $table->unsignedBigInteger('professor_id');
            // $table->foreign('professor_id')->references('id')->on('professors')->onDelete('cascade');
            $table->foreignId('professor_id')->constrained()->onDelete('cascade');
            // $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('graduates');
    }
};
