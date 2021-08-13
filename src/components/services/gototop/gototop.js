import React from 'react'
import './gototop.css'

function GoToTop(){
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }
    return <span id="myBtn" onClick={()=>topFunction()}>&#94;</span>
}
export default GoToTop