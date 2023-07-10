import cn from "classnames";
import s from "./Category.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Category = ({ title }) => {
    const { genderList, categories } = useSelector(state => state.navigation);

    return (
        <div className={s.category}>
            <h3 className={cn(s.categoryTitle, s.title)}>{title}</h3>
            <ul className={s.categoryList}>
                {genderList.map(gender => (
                    <li className={s.categoryItem} key={gender}>
                        <h3 className={s.categorySubtitle}>
                            <NavLink className={s.link} to={`/catalog/${gender}`}>
                                {categories[gender].title}
                            </NavLink>
                        </h3>
                        <ul className={s.categorySublist}>
                            {categories?.[gender]?.list?.map(category => (
                                <li key={category.slug}>
                                    <NavLink className={s.link} to={`/catalog/${gender}/${category.slug}`}>
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
}

export default Category