import React from 'react'
import { PersonsDialogType } from '../../../data/types'
import { UserElement } from '../../../components/userElement/UserElement'

type Props = {
  persons: PersonsDialogType[]
}

function SideDialogs({persons}: Props) {
  return (
    <div>
      <h2>Диалоги</h2>
      <ul>
        {persons.map(el => {
          return (
            <li key={el.id}>
              <UserElement id={el.id} name={el.name} smallText={el.smallText}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SideDialogs