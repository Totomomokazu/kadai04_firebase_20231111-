import { Avatar, Button } from '@mui/material'
import React,{useState} from 'react'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import db from "../../firebase"

function TweetBox() {
  const [tweetMessage, setTweetMessage]=useState("");
  const [tweetImage, setTweetImage]=useState("");
  const sendTweet =(e) =>{
    // firebaseのデータベースを追加する
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName:"テスト",
      username:"kanketomokazu",
      verified:true,
      text:tweetMessage,
      avatar:"https://img.freepik.com/premium-photo/beautiful-laughing-cat-illustration-icon-avatar-emoji-ai-image-idea-concept-wallpaper-drawing-kitten_985204-2297.jpg?w=2000",
      image:tweetImage,
      timestamp:serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  }
  


  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox_input'>
                <Avatar></Avatar>
                <input
                  value={tweetMessage} 
                  placeholder='いまどうしてる？' 
                  type='text'
                  onChange={(e) => setTweetMessage(e.target.value)}></input>
            </div>
                <input 
                  value={tweetImage}
                  className='tweet-box-imageInput' 
                  placeholder='画像のURLを入力してください' 
                  type='text'
                  onChange={(e)=>setTweetImage(e.target.value)}></input>
                <Button 
                  className='tweetBox--tweetButton' 
                  type='submit'
                  onClick={sendTweet}>ツイートする</Button>
        </form>
    </div>
  )
}

export default TweetBox