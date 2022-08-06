import './app3.css';
import $ from "jquery";//引用jquery  $就是jquery

const $square = $("#app3 .square")
$square.on("click", () =>{
    $square.toggleClass('active')
})