import cn from 'classnames';
import s from './ProductSize.module.scss'

const ProductSize = ({ count, handleIncrement, handleDecrement, className }) => (
    <div className={cn(s.count, className)}>
        Размеры
    </div>
)

export default ProductSize;