import { NavLink } from "react-router-dom";
import s from './Category.module.scss'
import cn from "classnames";
import { useSelector } from "react-redux";

const Category = () => {
    const { activeGender, categories } = useSelector(state => state.navigation)
    return (
        <ul className={s.category}>
            {categories[activeGender]?.list?.map(category => (
                <li key={category.slug}>
                    <NavLink
                        className={({ isActive }) => cn(s.link, (isActive && s.linkActive))}
                        to={`${activeGender}/${category.slug}`}>
                        {category.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

export default Category;
