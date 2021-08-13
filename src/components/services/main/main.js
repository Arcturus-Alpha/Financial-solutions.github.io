import React from 'react'
import Image from '../image/image'
import Functions from '../functions/functions'
import Description from '../description/description'
import Footer from '../footer/footer'
import Blogs from '../Blogs/blogs'
import './main.css'
function Main(props){
    var [desc,setDesc]=React.useState("")
    function describe(para){
        setDesc(para)
    }
    return <div className="main-block">
                <h1>{props.service.title} <span>{props.service.id}/12</span></h1>
                <div className="content">
                    <div className="info">
                        <div className="halfArrow">
                            <img src="../halfarrow.png" alt="half Arrow"/>
                        </div>
                        <div className="details">
                        {props.service.content}
                        </div>
                    </div>
                    <Functions 
                        functions={props.service.functions}
                        describe={describe}
                    />
                    <br />
                    <div className="mobile-image">
                    </div>
                    <div className="descriptions"><Description description={desc}/></div>
                    <Blogs />
                    <Footer />
                </div>
                <Image />
            </div>
}
export default Main