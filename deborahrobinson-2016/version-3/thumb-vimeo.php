<?php
function getVimeoThumb($id, $size = 'large') {

    $vimeo = unserialize(file_get_contents("http://vimeo.com/api/v2/video/$id.php"));

    switch ($size) {
        case "medium":
            return $vimeo[0]['thumbnail_medium'];
            break;
        case "small":
            return $vimeo[0]['thumbnail_small'];
            break;
        default:
            return $vimeo[0]['thumbnail_large'];
    }
}

echo getVimeoThumb(78013171, 'small');
?>
