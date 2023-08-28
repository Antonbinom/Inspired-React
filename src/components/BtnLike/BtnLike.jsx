import { ReactComponent as Like } from '/src/assets/heart.svg';
import s from "./BtnLike.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../features/favoritesSlice';
import cn from 'classnames';

const BtnLike = ({ id }) => {
  const dispatch = useDispatch();
  const isFavorites = useSelector(state => state.favorites.includes(id));

  const handleToggleFavorite = () => {
    if (isFavorites) {
      dispatch(removeFromFavorite({ id }))
    } else {
      dispatch(addToFavorite({ id }))
    }
  }

  return (
    <button
      className={isFavorites ? cn(s.like, s.active) : s.like}
      aria-label='Добавить в избранное'
      type="button"
      onClick={handleToggleFavorite}
    >
      <Like />
    </button>
  )
}

export default BtnLike;