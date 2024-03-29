import './Post.css'
import React from 'react'

export default function Post() {
  return (
    <div className='post'>
        <div className='postInfo'>
            <div className="postcats">
                {/* <span className="postCat">Music</span>
                <span className="postCat">Life</span> */}
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDescription'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eum aut illo quisquam? Aliquid eum earum voluptatum, laboriosam commodi saepe nesciunt accusantium deserunt natus hic at atque ex maxime magni.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eum aut illo quisquam? Aliquid eum earum voluptatum, laboriosam commodi saepe nesciunt accusantium deserunt natus hic at atque ex maxime magni.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim eum aut illo quisquam? Aliquid eum earum voluptatum, laboriosam commodi saepe nesciunt accusantium deserunt natus hic at atque ex maxime magni.
        </p>
    </div>
  )
}
