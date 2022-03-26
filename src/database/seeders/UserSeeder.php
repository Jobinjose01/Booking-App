<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        

        $users = ['John', 'Jane', 'Ronald','Sam','Susie'];

        $user_roles = [
                ['user_id' => 1, 'role_id' => 1 ,'created_at' => date('Y-m-d h:i:s')],
                ['user_id' => 2, 'role_id' => 2 ,'created_at' => date('Y-m-d h:i:s')],
                ['user_id' => 3, 'role_id' => 2 ,'created_at' => date('Y-m-d h:i:s')],
                ['user_id' => 4, 'role_id' => 2 ,'created_at' => date('Y-m-d h:i:s')],
                ['user_id' => 5, 'role_id' => 2 ,'created_at' => date('Y-m-d h:i:s')],
                ['user_id' => 6, 'role_id' => 2 ,'created_at' => date('Y-m-d h:i:s')],                
                ];

        foreach ($users as $name) {
            $data[] = ['name' => $name,'username' => strtolower($name),'password' => Hash::make('123456'), 'status' => '1', 'created_at' => date('Y-m-d h:i:s')];
        }

        $result = User::create([
            'name' => 'Admin',
            'username' => 'admin',
            'password' => Hash::make('123456'),
            'status' => '1',
        ]);

        
        \DB::table('users')
            ->insert($data);

        \DB::table('user_roles')
            ->insert($user_roles); 
    }
}
