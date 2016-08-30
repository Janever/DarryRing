<?php

    header('Content-Type: application/json; charset=utf-8');

    if($_POST[name] != '') {

        $result = array({
            'code'=> '10000',
            'msg'=>'success',
            'result'=> ''
        })
        echo json_decode($result);
    }


?>