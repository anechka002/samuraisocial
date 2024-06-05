import logo from './../../assets/logotype.svg';
import { style } from './Header.style.ts';
import { SvgIcon } from '../../components/SvgIcon.tsx';
import { UserElement } from '../../components/userElement/UserElement.tsx';
import DropDownMenu from '../../components/dropDownMenu/DropDownMenu.tsx';
import { dropDownMenuItems } from '../../data/data.ts';
import { v1 } from 'uuid';

export const Header = () => {
    return (
        <style.Header>
            <img src={logo} alt="logotype"/>
            <style.Navigation>
                <style.Menu>
                    <li><a href={'/'}><SvgIcon iconId={'news'}/></a></li>
                    <li><a href={'/'}><SvgIcon iconId={'message'}/></a></li>
                    <li><a href={'/'}><SvgIcon iconId={'notification'}/></a></li>
                </style.Menu>
                <style.UserMenu>
                    <UserElement id={v1()} name={'Настя Барашкова'} smallText={'@1234567890'} />
                    <DropDownMenu menuItems={dropDownMenuItems}/>
                </style.UserMenu>
            </style.Navigation>
        </style.Header>
    );
};