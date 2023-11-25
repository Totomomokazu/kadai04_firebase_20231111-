import { ChatBubbleOutline, Repeat, FavoriteBorder, VerifiedUser, PublishOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import "./Post.css"


const Post =forwardRef(
    ({displayName, username, verified, text, avatar, image}, ref) => {
        return (
          <div className='Post' ref={ref}>
              <div className='post_avatar'>
                  <Avatar src={avatar} ></Avatar>
              </div>
              <div className='post_body'>
                  <div className='post_header'>
                     <div className='post_headerText'>
                      <h3>{displayName}
                          <span className='post_headerSpecial'>
                              <VerifiedUser className='post_badge'></VerifiedUser>
                              @{username}
                          </span>
                      </h3>
                     </div>  
                     <div className='post_headerDescription'>
                      <p>{text}</p>
                     </div>
                  </div>
                  <img src={image} alt=''></img>
                  <div className='post_footer'>
                      <ChatBubbleOutline fontSize="small"></ChatBubbleOutline>
                      <Repeat fontSize="small"></Repeat>
                      <FavoriteBorder fontSize='small'></FavoriteBorder>
                      <PublishOutlined fontSize='small'></PublishOutlined>
      
                  </div>
              </div>
          </div>
        )
      }
)


export default Post