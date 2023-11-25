import { Search } from '@mui/icons-material'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton,  TwitterTweetEmbed } from 'react-twitter-embed';
import "./Widgets.css"

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets_input'>
            <Search className='wedgets_serachIcon'></Search>
            <input placeholder='キーワード検索' type='text'></input>
        </div>
        <div className='wedgets_wedgetContainer'>
            <h2>いまどうしてる？</h2>

            {/* {ライブラリを追加} */}
            <TwitterTweetEmbed tweetId={'1726201605287235951'}></TwitterTweetEmbed>
            <TwitterTimelineEmbed sourceType='profile' screenName='kanketomokazu' options={{height:400}} ></TwitterTimelineEmbed>
            <TwitterShareButton url={'https://twitter.com/kanketomokazu'} options={{text:"#React勉強中",via:"kanketomokazu"}}></TwitterShareButton>
        </div>
    </div>
  )
}

export default Widgets