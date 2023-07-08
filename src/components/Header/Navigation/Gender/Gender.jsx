import { NavLink, useLocation } from 'react-router-dom';
import s from './Gender.module.scss'
import cn from 'classnames';

const Gender = ({ list }) => {
    const { pathname } = useLocation();
    return (
        <ul className={s.gender}>
            {list.map(item => (
                <li className={s.item} key={item.link}>
                    <NavLink className={
                        ({ isActive }) => cn(s.link,
                            ((
                                isActive
                                || (pathname === '/' && item.link === 'women'))
                                && s.linkActive
                            ))}
                        to={item.link}>
                        {item.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
};

export default Gender;
