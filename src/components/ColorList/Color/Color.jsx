import cn from 'classnames';
import s from './Color.module.scss';

const Color = ({ color, check }) => {

    return (
        <li
            style={{ '--data-color': color }}
            className={cn(s.color, check && s.colorCheck)}
        />
    )
}

export default Color;