import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from '@mui/material';
import "./Sidebar.css";

function sidebar() {
  return (
    <div className='sidebar'>
        {/* {ツイッターアイコン} */}
        <TwitterIcon className='sidebar_twitterIcon'></TwitterIcon>

        {/* {sidebaroption}     */}
        <SidebarOption text="ホーム" Icon={HomeIcon} active></SidebarOption>
        {/* {sidebaroption}     */}
        <SidebarOption text="話題を検索" Icon={SearchIcon}></SidebarOption>
        {/* {sidebaroption}     */}
        <SidebarOption text="通知" Icon={MailOutlineIcon}></SidebarOption>
        {/* {sidebaroption}     */}
        <SidebarOption text="メッセージ" Icon={NotificationsNoneIcon}></SidebarOption>
        {/* {sidebaroption}     */}
        <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon}></SidebarOption>
        {/* {sidebaroption}     */}
        <SidebarOption text="リスト" Icon={ListAltIcon}></SidebarOption>
        {/* {sidebaroption}     */}
        <SidebarOption text="プロフィール" Icon={PermIdentityIcon}></SidebarOption>
        {/* {sidebaroption}     */}
        <SidebarOption text="もっとみる" Icon={MoreHorizIcon}></SidebarOption>
        {/* {sidebaroption}     */}
        {/* {sidebaroption}     */}
        {/* {sidebaroption}     */}
        {/* {sidebaroption}     */}
        {/* {sidebaroption}     */}
        {/* {sidebaroption}     */}


        {/* {ツイートボタン} */}
        <Button variant='outlined' className='sidebar_tweet' fullWidth>ツイートする</Button>
    </div>
  )
}

export default sidebar