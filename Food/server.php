<?php
$_POST = json_decode(file_get_contents("php://input"), true); // Декодирует для JSON запросов
echo var_dump($_POST);