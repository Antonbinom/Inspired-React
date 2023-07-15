import { NavLink } from 'react-router-dom';
import s from './Product.module.scss';
import { API_URL } from '/src/const.js';
import { ReactComponent as Like } from '/src/assets/Heart.svg'
import ColorList from '../ColorList/ColorList';

const Product = ({ id, title, price, colors, pic }) => {
    return (
        <article className={s.product}>
            <NavLink className={s.link} to={`/product/${id}`}>
                <img className={s.image} src={`${API_URL}/${pic}`} alt={title} />
                <h3 className={s.title}>{title}</h3>
            </NavLink>
            <div className={s.row}>
                <p className={s.price}>руб {price}</p>
                <button className={s.favorite}>
                    <Like />
                </button>
            </div>
            <ColorList colors={colors} />
        </article>
    )
}

export default Product