<?php
    include_once("../process/passwordProcess.php");
    $process = new Process();
    $data = json_decode(file_get_contents('php://input'), true);

    if(isset($data["action"]) && $data["action"] == "md5Generator"){
        $process->md5Generator($data);
    }
?>