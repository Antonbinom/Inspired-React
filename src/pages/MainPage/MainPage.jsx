import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGender } from "/src/features/goodsSlice";
import { fetchCategory } from "/src/features/goodsSlice";
import { setActiveGender } from "/src/features/navigationSlice";
import Goods from "/src/components/Goods/Goods";
import Banner from "/src/components/Banner/Banner";

const MainPage = () => {
    const { gender = 'women', category } = useParams();
    const dispatch = useDispatch();
    const { activeGender, categories } = useSelector(state => state.navigation);
    const genderData = categories[activeGender];
    const categoryData = genderData?.list.find(item => item.slug === category);

    useEffect(() => {
        dispatch(setActiveGender(gender));
    }, [gender, dispatch]);

    useEffect(() => {
        if (gender && category) {
            dispatch(fetchCategory({ gender, category }));
            return;
        }
        if (gender) {
            dispatch(fetchGender(gender));
            return;
        }
    }, [gender, category, dispatch]);

    return (
        <section>
            {!category && <Banner data={genderData?.banner} />}
            <Goods
                category={category}
                title={categoryData?.title}
            />
        </section>
    )
};

export default MainPage