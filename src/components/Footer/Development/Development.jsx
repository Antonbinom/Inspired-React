import s from "./Development.module.scss";
const Development = () => (
    <div className={s.development}>
        <ul className={s.developmentList}>
            <li>
                <a href="/">Designer: Anastasia Ilina</a>
            </li>
            <li className={s.link}>
                <a href="/">Developer: Semenikhin Anton</a>
            </li>
        </ul>
    </div>
)

export default Development