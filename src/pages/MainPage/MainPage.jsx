// import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGoods } from "/src/features/goodsSlice";
import Container from "/src/components/Layout/Container/Container";
import Product from "/src/components/Product/Product";
import s from './MainPage.module.scss';

const MainPage = ({ gender = 'women' }) => {
    // const { category } = useParams();
    const dispatch = useDispatch();
    const { goodsList } = useSelector(state => state.goods);

    useEffect(() => {
        dispatch(fetchGoods(gender));
    }, [gender, dispatch]);

    return (
        <section>
            <Container>
                <h2 className={s.title}>Новинки</h2>
                <ul className={s.list}>
                    {goodsList.map(item => (
                        <li key={item.id}>
                            <Product key={item.id} {...item} />
                        </li>
                    ))

                    }
                </ul>
            </Container>
        </section>
    )
};

export default MainPage