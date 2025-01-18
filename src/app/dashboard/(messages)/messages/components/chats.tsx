import React from 'react'
import Img1 from "../../../../../../public/contact3.png"
import Slack from "../../../../../../public/slack.png"
import Chatgpt from "../../../../../../public/chatgpt.png"
import Behance from "../../../../../../public/behance.png"
import Youtube from "../../../../../../public/Youtube.png"
import Facebook from "../../../../../../public/facebook.png"
import Img2 from "../../../../../../public/contact2.png"
import Img3 from "../../../../../../public/contact4.png"
import Img4 from "../../../../../../public/contact5.png"
import Img5 from "../../../../../../public/user.png"
import Img6 from "../../../../../../public/Req0125.png"
import Img7 from "../../../../../../public/Req1015.png"
import Img8 from "../../../../../../public/Req2805.png"
import Image from 'next/image'
export default function Chats() {
    const chats = [
        {
            Img : Img1,
            name : "ByeWind",
            text : "When will it be done?"
        },
        {
            Img : Slack,
            name : "Slack",
            text : "Invite your team to Slack"
        },
        {
            Img : Img2,
            name : "Natali Craig",
            text : "Hi"
        },
        {
            Img : Img3,
            name : "Drew Cano",
            text : "The repair is complete!"
        },

        {
            Img : Behance,
            name : "Behance",
            text : "You have a new follower"
        },
        {
            Img : Img4,
            name : "Orlando Diggs",
            text : "Hey man..Nah man sorry i don't. Should i get it?"
        },
        {
            Img :Chatgpt,
            name : "ChatGPT",
            text : "Welcome to ChatGPT"
        },
        {
            Img : Img5,
            name : "ByeWind",
            text : "When will it be done?"
        },
        {
            Img : Img6,
            name : "Lane",
            text : "Re: New mail settings, Will you answer him asap?"
        },
        {
            Img : Facebook,
            name : "Facebook",
            text : "You have a new follower"
        },
        {
            Img : Youtube,
            name : "YouTube",
            text : "The most popular videos of 2024"
        },
        

        {
            Img : Img8,
            name : "ByeWind",
            text : "When will it be done?"
        },
        {
            Img : Img2,
            name : "Kate Morrison",
            text : "I think we should use the first version."
        }, {
            Img : Img7,
            name : "Koray Okumus",
            text : "Let's talk about the search box interaction again"
        }, {
            Img : Img1,
            name : "ByeWind",
            text : "When will it be done?"
        }, {
            Img : Img1,
            name : "ByeWind",
            text : "When will it be done?"
        },
    ]
  return (
    <>
    {chats.map((chat, index)=> {
        return <div key = {index} className='flex gap-x-2 hover:rounded-lg px-2 pt-2 cursor-pointer pb-4 hover:bg-[#0000000A]'>
            <Image src ={chat.Img} className='w-[24px] h-[24px] rounded-full' alt = "profile-picture" width={24} height={24} />

            <div className='flex-1'>
<h1 className='text-sm font-[400] text-black'>{chat.name}</h1>
<p className='text-[#00000066] text-xs font-[400]'>{chat.text}</p>
            </div>


<div className='max-w-fit w-[100%] text-xs text-[#00000066] font-[400]'>19:28</div>
        </div>
    })}
    </>
  )
}
