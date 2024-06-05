import { v1 } from "uuid";
import { DropDownLinksType, PersonsDialogType } from "./types";

export const dropDownMenuItems: DropDownLinksType[] = [
  {href: '#1', title: 'menu item 1'},
  {href: '#2', title: 'menu item 2'},
  {href: '#3', title: 'menu item 3'},
  {href: '#4', title: 'menu item 4'},
  {href: '#5', title: 'menu item 5'},
]

export const personsForDialogs: PersonsDialogType[] = [
  {
    id: v1(),
    name: 'John Doe',
    smallText: 'Hello',
    isOnline: true,
  },
  {
    id: v1(),
    name: 'Biba',
    smallText: 'Hello',
    isOnline: false,
  },
  {
    id: v1(),
    name: 'Boba',
    smallText: 'Hello',
    isOnline: true,
  },
  {
    id: v1(),
    name: 'Giga',
    smallText: 'Hello',
    isOnline: false,
  },
  {
    id: v1(),
    name: 'Goga',
    smallText: 'Hello',
    isOnline: false,
  },
  
]