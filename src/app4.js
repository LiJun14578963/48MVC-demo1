import './app4.css';
import $ from "jquery";//引用jquery  $就是jquery

const $circle = $("#app4 .circle")
$circle.on("mouseenter", () => {
    $circle.addClass('active')
}).on("mouseleave", () => {
        $circle.removeClass('active')
    })
