import { NavLink } from 'react-router-dom';
import s from './Gender.module.scss'
import cn from 'classnames';
import { useSelector } from 'react-redux';

const Gender = () => {
    const { activeGender, genderList, categories } = useSelector(state => state.navigation)
    const isGenderActive = (item) => ({ isActive }) => {
        return cn(s.link, (isActive || activeGender === item) && s.linkActive)
    }
    return (
        <ul className={s.gender}>
            {genderList.map(gender => (
                <li className={s.item} key={gender}>
                    <NavLink className={isGenderActive(gender)}
                        to={gender}>
                        {categories[gender].title}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
};

export default Gender;
