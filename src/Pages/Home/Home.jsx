import Header from "../../Components/Header/Header.jsx"
import Posts from "../../Components/Posts/Posts.jsx"
import Sidebar from "../../Components/Sidebar/Sidebar.jsx"
import "./Home.css"
import React from "react"

export default function Home() {
  return (
    <div>
        <Header/>
        <div className="home">
          <Posts/>
          {/* <Sidebar/> */}
        </div>

    </div>
  )
}
