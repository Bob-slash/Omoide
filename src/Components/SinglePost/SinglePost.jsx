import './SinglePost.css'
import React from 'react'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            {/* <img/> */}
        <h1 className="singlePostTitle">
            祖母の戦争
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <b>Bobby</b></span>
            <span className='singlePostDate'>1 hour ago</span>
        </div>
        <div className='singlePostDescription'>
            <p className='singlePostParagraph first'>
            私の祖母、村田ますえさんは昭和三年（1928年）に生まれました。当時の日本は数多くの戦争に関わっていました。その中にも日清戦争、日露戦争、そして日中戦争があります。この頃のおばあちゃんは小さくて、聞いてもよく覚えてないと言われましたが、平和な暮らしをしていらしていたそうです。その後、想像もつかない事が起こる。
            </p>
            <p className='singlePostParagraph'>
            戦争に入った時のおばあちゃんはパールハーバーに対しびっくりはしていましたが、人生にはまだ変化はありませんでした。日々の学校生活も変わらなく、戦争とは別の世界に暮らしていました。ですが、戦争に入り、少しずつ贅沢なものが無くなって行きました。初めに取り上げられたのは金でした。腕時計やネックレス、金でできてたものは全て軍に取り上げられた。その後、服装も軍が決めたものに変わり食べ物も少しずつ無くなっていきました。この中、政治は国民への支援を与え始めました。米穀通帳という物が配られ、この紙で政治からもらえたお米の量が決められました。
            </p>
        </div>
        </div>
    </div>
  )
}
