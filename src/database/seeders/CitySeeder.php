<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       
        $cities = ['Berlin', 'Munich', 'Frankfurt','Stuttgart','Hamburg','Cologne','Dusseldorf','Bonn','Leipzig','Darmstadt'];

        foreach ($cities as $name) {
            $data[] = ['name' => $name, 'status' => '1', 'created_at' => date('Y-m-d h:i:s')];
        }

        \DB::table('cities')
        ->insert($data);
    }
}
