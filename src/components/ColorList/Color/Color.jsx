import cn from 'classnames';
import s from './Color.module.scss';
import { useEffect, useRef } from 'react';

const Color = ({ color, check }) => {
    const colorRef = useRef(null)

    useEffect(() => {
        if (colorRef.current) {
            colorRef.current.style.setProperty('--data-color', color);
        }
    }, [color])

    return (
        <li>
            <button ref={colorRef} className={cn(s.color, check && s.colorCheck)} />
        </li>
    )
}

export default Color;