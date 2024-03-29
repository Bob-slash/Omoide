import "./Navbar.css"
import React from "react"
import { Link } from "react-router-dom"

export default function Navbar(){
    return (
        <div className = "nav">
            <div className="topLeft">
                Omoide
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/Info">Info</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/Single">Stories</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/Write">Write</Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}