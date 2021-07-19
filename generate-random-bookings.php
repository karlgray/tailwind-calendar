#!/usr/bin/php -q
<?php

require __DIR__ . '/vendor/autoload.php';

$faker = Faker\Factory::create('en_UK');

$events = new stdClass();

$count = 0;
$max_count = 40;
for ($count=0; $count <  $max_count ; $count++) { 
	$date = $faker->dateTimeBetween($startDate = '2021-06-01', $endDate = '2021-08-30', $timezone = null);
	$start_date = date("Y-m-d", $date->getTimestamp());
	$date = $faker->dateTimeBetween($startDate = $start_date, $endDate = '2021-08-30', $timezone = null);
	$end_date = date("Y-m-d", $date->getTimestamp());

	$name = $faker->name;
	$events->$count = new stdClass();
	$events->$count->start_date = $start_date;
	$events->$count->end_date = $end_date;
	$events->$count->name = $name;


	echo "Start: $start_date - End: $end_date Name: $name\n";
}

ray($events);

echo json_encode($events);

$filename = 'events.json';
$content = json_encode($events);
file_put_contents($filename, $content);


