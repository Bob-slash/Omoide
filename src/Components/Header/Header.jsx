import "./Header.css"
import React from "react"

export default function Header() {
  return (
    <div className="Header">
        <div className="HeaderTitles">
            <span className="HeaderTitleSm"></span>
            <span className="HeaderTitleLg">Omoide</span>
        </div>
        <img className="HeaderImg" src={require("/Users/albarh22/Desktop/人文科学プロジェクト/blog_tutorial/src/Assets/DSC6531.jpg")} alt=""/>
    </div>
  )
}
