import React from 'react'
import { SvgIcon } from '../../../../components/SvgIcon'

type Props = {
  avatar: string
  text: string
  date: string
  like: boolean
  fromMe: boolean
}

function Message({avatar, text, date, like, fromMe}: Props) {
  return (
    <div>
      <img src={avatar} alt={'Photo of profile'} />
      <p>{text}</p>
      <time>{date}</time>
      {like && <SvgIcon iconId={'news'}/>}
    </div>
  )
}

export default Message