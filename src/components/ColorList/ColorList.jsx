import { useSelector } from 'react-redux';
import Color from './Color/Color';
import ColorLabel from './ColorLabel/ColorLabel';
import s from './ColorList.module.scss';

const ColorList = ({ colors, selectedColor, handleColorChange }) => {
    const { colorsList } = useSelector(state => state.colors);
    return handleColorChange ? (
        <div className={s.colorList}>
            {colors?.map((id, i) => {
                const color = colorsList.find(color => color.id === id)
                return <ColorLabel
                    key={id}
                    color={color}
                    check={!i}
                    selectedColor={selectedColor}
                    handleColorChange={handleColorChange}
                />
            })}
        </div>
    ) :
        (
            <ul className={s.colorList}>
                {colors.map((id, i) => {
                    const color = colorsList.find(color => color.id === id)
                    return <Color
                        key={id}
                        color={color?.code}
                        check={!i}
                    />
                })}
            </ul>
        )
}

export default ColorLabel;