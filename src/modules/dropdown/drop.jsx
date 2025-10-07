import React, { useState } from "react";
import './drop.css'

export default()=>{
    const [open, setOpen] = useState(false)
    return(
        <>
        <div className={"dropdown"}>
            <button className={"button"} onClick={()=>{setOpen(!open)}}>Discovery
                <div className={`caret ${open ? "rotated" : ""}`}></div>
                        <nav className={`menu ${open ? "active" : ""}`}>
                            <ul className={"list"}>
                                <li className={"menu__item"}><a className='link' href="#">New season</a></li>
                                <li className={"menu__item"}><a className='link' href="#">Most searched</a></li>
                                <li className={"menu__item"}><a className='link' href="#">Most selled</a></li>
                            </ul>
                        </nav>
            </button>
        </div>
        </>
    )
}