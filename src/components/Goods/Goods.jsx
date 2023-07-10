import Container from "/src/components/Layout/Container/Container";
import Product from "/src/components/Product/Product";
import s from './Goods.module.scss';
import { useSelector } from "react-redux";

const Goods = ({ categoryData }) => {
    const { goodsList } = useSelector(state => state.goods);

    const title = categoryData?.title ?? 'Новинки';
    return (
        <section className={s.goods}>
            <Container>
                <h2 className={s.title}>{title}</h2>
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

export default Goods;