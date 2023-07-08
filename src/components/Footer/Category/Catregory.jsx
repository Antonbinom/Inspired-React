import cn from "classnames";
import s from "./Category.module.scss";
const Category = () => (
    <div className={s.category}>
        <h3 className={cn(s.categoryTitle, s.title)}>Каталог</h3>
        <div className={s.categoryList}>
            <div>
                <div className={s.categorySubtitle}>Женщины</div>
                <ul className={s.categorySublist}>
                    <li>
                        <a className={s.link} href="/">Бюстгалтеры</a>
                    </li>
                    <li>
                        <a className={s.link} href="/">Трусы</a>
                    </li>
                    <li>
                        <a className={s.link} href="/">Носки</a>
                    </li>
                    <li>
                        <a className={s.link} href="/">Халаты</a>
                    </li>
                    <li>
                        <a className={s.link} href="/">Термобелье</a>
                    </li>
                    <li>
                        <a className={s.link} href="/">Пижамы</a>
                    </li>
                </ul>
            </div>
            <div>
                <div className={s.categorySubtitle}>Мужчины</div>
                <ul className={s.categorySublist}>
                    <li>
                        <a className={s.link} href="/">Трусы</a>
                    </li>
                    <li>
                        <a className={s.link} href="/">Носки</a>
                    </li>
                    <li>
                        <a className={s.link} href="/">Халаты</a>
                    </li>
                    <li>
                        <a className={s.link} href="/">Термобелье</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default Category