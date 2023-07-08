import cn from "classnames";
import s from "./Category.module.scss";
import { NavLink } from "react-router-dom";



const Category = ({ list, title }) => (
    <div className={s.category}>
        <h3 className={cn(s.categoryTitle, s.title)}>{title}</h3>
        <ul className={s.categoryList}>
            {list.map(item => (
                <li className={s.categoryItem} key={item.link}>
                    <h3 className={s.categorySubtitle}>
                        <NavLink className={s.link} to={item.link}>
                            {item.title}
                        </NavLink>
                    </h3>
                    <ul className={s.categorySublist}>
                        {item.categories.map(category => (
                            <li key={category.link}>
                                <NavLink className={s.link} to={`${item.link}/${category.link}`}>
                                    {category.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    </div>
)

export default Category