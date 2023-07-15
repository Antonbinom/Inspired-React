import cn from 'classnames';
import s from './ColorLabel.module.scss';

const ColorLabel = ({
    color,
    check,
    selectedColor,
    handleColorChange
}) => {

    return (
        <label
            style={{ '--data-color': color?.code }}
            className={cn(s.color, check && s.colorCheck)}
        >
            <input
                className={s.input}
                type="radio"
                name="color"
                value={color?.title}
                checked={selectedColor ? selectedColor === color?.title : check}
                onChange={handleColorChange}
            />
            <span className={s.colorCheck}></span>
        </label>
    )
}

export default ColorLabel;