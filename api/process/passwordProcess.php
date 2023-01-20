<?php
    header("Access-Control-Allow-Origin: *");
    
    class Process
    {
        public function md5Generator($data) {
            $text = $data['text'];
            $md5text = md5($text);
            echo json_encode(array(
                'text' => $text,
                'md5' => $md5text
            ));
        }
    }
    
?>