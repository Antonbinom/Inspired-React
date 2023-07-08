import { NavLink, useLocation } from "react-router-dom";
import s from './Category.module.scss'
import cn from "classnames";

const Category = ({ list }) => {
    const { pathname } = useLocation();
    const gender = pathname.includes('women') ? list[0] : list[1];
    return (
        <ul className={s.category}>
            {gender.categories.map(item => (
                <li key={item.link}>
                    <NavLink
                        className={({ isActive }) => cn(s.link, (isActive && s.linkActive))}
                        to={`${gender.link}/${item.link}`}>
                        {item.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

export default Category;
