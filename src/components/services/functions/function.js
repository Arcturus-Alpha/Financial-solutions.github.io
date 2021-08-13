import React from 'react'

function Function(props){
    function setDescribe(id){
        var li=document.getElementsByClassName('btn')
        for(var i=0;i<li.length;i++){
            if(li[i].id===id){
                if(window.screen.width>768){
                    li[i].style.backgroundColor="#3F48C8";
                    li[i].style.color="#ffffff";
                }
                else{
                    li[i].style.backgroundColor="rgb(61,176,233)";
                    li[i].style.color="#ffffff";
                }
            }
            else{     
                li[i].style.backgroundColor="#ffffff";
                li[i].style.color="#3F48C8";
            }
        }
        props.describe(props.value.description)
    }
    return <div className="function"><button className="btn" id={props.value.title} title={props.value.title} onClick={()=>{setDescribe(props.value.title)}}>{props.value.title}</button></div>
}
export default Function