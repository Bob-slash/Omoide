import './Single.css'
import Sidebar from "../../Components/Sidebar/Sidebar.jsx"
import SinglePost from '../../Components/SinglePost/SinglePost'
import React from 'react'

export default function Single() {
  return (
    <div className='single'>
        {/* post */}
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}
