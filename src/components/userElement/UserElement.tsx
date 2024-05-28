import React from 'react'
import avatar from './../../assets/avatars/01.jpg'

function UserElement() {
  return (
    <div>
      <img src={avatar} alt={'User/s photo'} />
      <p>
        <span>Настя Барашкова</span>
        <span></span>
      </p>

    </div>
  )
}

export default UserElement