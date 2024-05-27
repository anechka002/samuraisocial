import React from 'react'
import avatar from './../../assets/avatars/F43BF588-6545-4BFC-8864-5D319FFD88AD.jpg'

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