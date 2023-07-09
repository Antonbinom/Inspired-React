import { useSelector } from 'react-redux';
import Color from './Color/Color';
import s from './ColorList.module.scss';

export const ColorList = ({ colors }) => {
    const { colorsList } = useSelector(state => state.colors);

    return (
        <ul className={s.colorList}>
            {colors.map((id, i) => {
                console.log(i);
                const color = colorsList.find(color => color.id === id)
                return <Color key={id} color={color?.code} check={!i} />
            })}
        </ul>
    )
}