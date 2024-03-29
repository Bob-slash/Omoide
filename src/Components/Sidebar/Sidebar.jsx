import "./Sidebar.css"
import React from "react"

export default function Sidebar() {
  return (
    <div className="Sidebar">
        <div className="SidebarItem">
            <span className="SidebarTitle">村田ますえ</span>
            <p className="SidebarDescription">村田ますえさんは昭和三年生まれで、私のおばあちゃんです。今の95歳でもアパートの経営をしていまして、毎日庭の掃除をしています。趣味で野菜や果物を庭で育てています。</p>
        </div>
        {/* <div className="SidebarItem">
            <span className="SidebarTitle">Categories</span>
            <ul className="SidebarList">
                <il className="SidebarListItem">Life</il>
                <il className="SidebarListItem">Music</il>
                <il className="SidebarListItem">Style</il>
            </ul>
        </div>
        <div className="SidebarItem">
            <span className="SidebarTitle">Follow Us</span>
        </div> */}
    </div>
  )
}
