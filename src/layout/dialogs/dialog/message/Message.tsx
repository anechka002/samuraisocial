import React from 'react'
import { Style } from './Message.style'
import { SvgIcon } from '../../../../components/SvgIcon'

type Props = {
  avatar: string
  text: string
  date: string
  like: boolean
  fromMe: boolean
}

export function Message({avatar, text, date, like, fromMe}: Props) {
  return (
    <Style.Message fromMe={fromMe}>
      <Style.Photo src={avatar} alt={'Photo of profile'} />
      <Style.TextField fromMe={fromMe}>
        <p>{text}</p>
        <time>{date}</time>
      </Style.TextField>
      {like && <SvgIcon iconId={'news'}/>}
    </Style.Message>
  )
}

