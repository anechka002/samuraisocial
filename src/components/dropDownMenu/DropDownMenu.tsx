import React, { useState } from 'react'
import { SvgIcon } from '../SvgIcon'
import { DropDownLinksType } from '../../data/types'
import {style} from './DropDownMenu.style'

export type DropDownMenuProps = {
  menuItems: DropDownLinksType[]
}

function DropDownMenu({menuItems}: DropDownMenuProps) {

  const [open, isOpen] = useState(false)

  const onClickHandler = () => {
    isOpen(prev => !prev);
  }

  const onBlurHandler = () => {
    console.log('Yo')
    isOpen(false)
  }

  return (
    <style.DropDownMenu>
      <button onBlur={onBlurHandler} onClick={onClickHandler}>
        <SvgIcon iconId={'arrowDown'}></SvgIcon>
      </button>
      {open && <style.DropMenu>
        {
          menuItems.map((el, index) => {
            return (
              <style.MenuItem key={index}>
                <a href={el.href}>{el.title}</a>
              </style.MenuItem>
            )
          })
        }
      </style.DropMenu>}
    </style.DropDownMenu>
  )
}

export default DropDownMenu

