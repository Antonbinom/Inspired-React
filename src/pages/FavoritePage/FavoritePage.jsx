import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "/src/features/goodsSlice";
import Goods from "/src/components/Goods/Goods";
import { usePageFromSearchParams } from "../../hooks/usePageFromSearchParams";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const page = usePageFromSearchParams(dispatch);

  useEffect(() => {
    if (favorites) {
      const param = { list: favorites }
      if (page) param.page = page;
      dispatch(fetchCategory(param));
    }
  }, [favorites, page, dispatch]);

  return (
    <Goods title="Избранное" />
  )
};

export default FavoritePage