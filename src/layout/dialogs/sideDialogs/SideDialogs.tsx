import React from 'react'
import { PersonsDialogType } from '../../../data/types'
import { UserElement } from '../../../components/userElement/UserElement'
import { StyleLayout } from '../../layoutStyles'

type Props = {
  persons: PersonsDialogType[]
}

export function SideDialogs({persons}: Props) {
  return (
    <StyleLayout.SideBlock>
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
    </StyleLayout.SideBlock>
  )
}