import React from 'react'
import Deadlines from '../deadlines/deadlines'
import './footer.css'
function Footer(){
    return <div className="footer">
        <p><a href="google.com">Blog</a>  <span> . </span>  <a href="google.com">Case Study</a>  <span> . </span>  <a href="google.com">Video</a>  <span> . </span>  <a href="google.com">Forms</a></p>
        <Deadlines />
        <div className="icons">
            <a  target="_self" rel="noopener noreferrer" href={`tel: +919292300345`}>
              {" "}
              <i className="mx-1 fa fa-phone"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" href={'https://api.whatsapp.com/send/?phone=9292300345&text&app_absent=0'}>
              {" "}
              <i className="mx-1 fa fa-whatsapp"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://telegram.me/make05`}
            >
              {" "}
              <i className="mx-1 fa fa-telegram"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={
                   "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=samskrithigoshala@gmail.com"
              }
            >
              {" "}
              <i className="mx-1 fa fa-envelope"></i>
            </a>
            </div>
    </div>
}
export default Footer