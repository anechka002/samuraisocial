import { SvgIcon } from '../../components/SvgIcon.tsx';
import UserElement from '../../components/userElement/UserElement.tsx';
import logo from './../../assets/logotype.svg';
import { style } from './Header.style.ts';

export const Header = () => {
    return (
        <style.Header>
            <img src={logo} alt="logotype"/>
            <nav>
                <ul>
                    <li><a href={'/'}><SvgIcon iconId={'news'}/></a></li>
                    <li><a href={'/'}><SvgIcon iconId={'message'}/></a></li>
                    <li><a href={'/'}><SvgIcon iconId={'notification'}/></a></li>
                </ul>
                <div>
                    <UserElement/>
                </div>
            </nav>
        </style.Header>
    );
};