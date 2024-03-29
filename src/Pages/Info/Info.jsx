import React from 'react'
import './Info.css'

export default function Info() {
  return (
    <div>
         <div className='singlePost'>
        <div className="singlePostWrapper">
            <img className="singlePostImage" src={require("/Users/albarh22/Desktop/人文科学プロジェクト/blog_tutorial/src/Assets/DSC6531.jpg")} alt=""/>
        <h1 className="singlePostTitle">
            第二次世界大戦
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <b>Bobby</b></span>
        </div>
        <div className='singlePostDescription'>
            <p className='singlePostParagraph first'>
            第二次世界大戦が始まったのは1939年の9月1日でした。ヒトラーはポーランドに潜入し、世界がドイツに武器を向けました。この時、日本はまだ戦争に参加していませんでした。中国を潜入していた。この勝利と、その当時の戦争をふまえ、日本軍は自惚れていた。こうして、日本はアメリカを攻撃すると決意した。1941年12月7日、日本はパールハーバーに大量な爆弾を落とした。これから、日本はアメリカにねらわれ、日本地で戦うことになりました。この中、何万人の国民が犠牲になりました。
            1944年に空襲が始まりました。B-29という戦闘機が発明された。日本国民は数多く死んだ。
            </p>
            {/* <p className='singlePostParagraph'>
            戦争に入った時のおばあちゃんはパールハーバーに対しびっくりはしていましたが、人生にはまだ変化はありませんでした。日々の学校生活も変わらなく、戦争とは別の世界に暮らしていました。ですが、戦争に入り、少しずつ贅沢なものが無くなって行きました。初めに取り上げられたのは金でした。腕時計やネックレス、金でできてたものは全て軍に取り上げられた。その後、服装も軍が決めたものに変わり食べ物も少しずつ無くなっていきました。この中、政治は国民への支援を与え始めました。米穀通帳という物が配られ、この紙で政治からもらえたお米の量が決められました。
            </p> */}
        </div >
        <img className="singlePostImage nextImg" src={require("/Users/albarh22/Desktop/人文科学プロジェクト/blog_tutorial/src/Assets/Ukraine.jpeg")} alt=""/>
        <h1 className="singlePostTitle">
            ウクライナ戦争
        </h1>
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
    </div>
  )
}
