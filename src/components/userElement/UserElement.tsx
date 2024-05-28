
import avatar from './../../assets/avatars/01.jpg'
import {style} from './UserElement.style'

export function UserElement() {
  return (
    <style.UserBlock>
      <style.Avatar src={avatar} alt={'User/s photo'} />
      <style.TextInfo>
        <style.Name>Настя Барашкова</style.Name>
        <style.Small>@id234567898</style.Small>
      </style.TextInfo>

    </style.UserBlock>
  )
}

