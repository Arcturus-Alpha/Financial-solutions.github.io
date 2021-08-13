import React from 'react'
import Service from './service'
import './nav.css'
import Navbar from '../Navbar/Navbar'
function Nav(props){
        return <div className="nav-block">
                    <div className="nav-bar">
                    <Navbar 
                        services={props.services}
                        mainContent={props.mainContent}
                    />
                    </div>
                    <div className="nav">
                        {props.services.map(service=>{
                            return <Service 
                            id={service.id}
                            title={service.title}
                            mainContent={props.mainContent}
                            />
                        })}
                    </div>
                    <div className="back" onClick={()=>window.location.href='/'}>
                        <img src="../goback1.png" alt="back"/>
                    </div>
                </div>
}
export default  Nav