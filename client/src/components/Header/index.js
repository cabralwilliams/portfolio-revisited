import React, { useState, useEffect } from 'react'

function Header() {
    const [activeRoute,setActiveRoute] = useState("");

    useEffect(() => {
        const newActive = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
        switch(newActive) {
            case "about":
                setActiveRoute("about");
                break;
            case "portfolio":
                setActiveRoute("portfolio");
                break;
            case "contact":
                setActiveRoute("contact");
                break;
            case "resume":
                setActiveRoute("resume");
                break;
            default:
                setActiveRoute("/");
                break;
        }
    }, [setActiveRoute]);
    return (
        <header className='bgColor8'>
            <nav>
                <ul className='noType flex-row space-evenly'>
                    <li className={`mainnav${activeRoute === "/" ? " selectedPath" : ""}`}><a href='/' className='fontColor9 noDecoration'>Home</a></li>
                    <li className={`mainnav${activeRoute === "about" ? " selectedPath" : ""}`}><a href='/about' className='fontColor9 noDecoration'>About</a></li>
                    <li className={`mainnav${activeRoute === "portfolio" ? " selectedPath" : ""}`}><a href='/portfolio' className='fontColor9 noDecoration'>Portfolio</a></li>
                    <li className={`mainnav${activeRoute === "contact" ? " selectedPath" : ""}`}><a href='/contact' className='fontColor9 noDecoration'>Contact</a></li>
                    <li className={`mainnav${activeRoute === "resume" ? " selectedPath" : ""}`}><a href='/resume' className='fontColor9 noDecoration'>Resume</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;