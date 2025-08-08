<?php
// Test file untuk memverifikasi MIME type
header('Content-Type: text/plain');

echo "Testing MIME types:\n\n";

// Test CSS file
$css_file = 'assets/css/style.css';
if (file_exists($css_file)) {
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime_type = finfo_file($finfo, $css_file);
    finfo_close($finfo);
    echo "CSS file ($css_file): $mime_type\n";
} else {
    echo "CSS file not found\n";
}

// Test JS file
$js_file = 'assets/js/custom.js';
if (file_exists($js_file)) {
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime_type = finfo_file($finfo, $js_file);
    finfo_close($finfo);
    echo "JS file ($js_file): $mime_type\n";
} else {
    echo "JS file not found\n";
}

echo "\nServer configuration:\n";
echo "PHP version: " . phpversion() . "\n";
echo "Server software: " . $_SERVER['SERVER_SOFTWARE'] . "\n";
?> 