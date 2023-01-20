<?php
    include_once("../process/passwordProcess.php");
    $process = new Process();

    if(isset($_POST["action"]) && $_POST["action"] == "md5Generator"){
        $process->md5Generator($_POST);
    }
?>