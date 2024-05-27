import logo from '../../assets/logotype.svg'
import {style} from './Header.style'


export function Header() {
  return (
    <style.Header>
      <img src={logo} alt='social network'/>
      <nav>
        <ul>
          <li><a href='/'>img 1</a></li>
          <li><a href='/'>img 2</a></li>
          <li><a href='/'>img 3</a></li>
        </ul>
        <div>

        </div>
      </nav>
    </style.Header>
  )
}

