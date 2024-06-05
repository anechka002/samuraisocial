import { PersonsDialogType } from '../../data/types'
import { NotificationDot } from '../NotificationsDot.style'
import avatar from './../../assets/avatars/01.jpg'
import {style} from './UserElement.style'

export function UserElement({name, smallText, isOnline}: PersonsDialogType) {
  return (
    <style.UserBlock>
      <style.AvatarWrapper>
        <style.Avatar src={avatar} alt={'User/s photo'} />
        {isOnline && <NotificationDot/>}
      </style.AvatarWrapper>
      <style.TextInfo>
        <style.Name>{name}</style.Name>
        <style.Small>{smallText}</style.Small>
      </style.TextInfo>

    </style.UserBlock>
  )
}

