<?php
    header("Access-Control-Allow-Origin: *");

    $text = $_GET['text'];
    $md5text = md5($text);
    echo json_encode(array(
        'text' => $text,
        'md5' => $md5text
    ));
?>