import { useSelector } from "react-redux";
import Container from "/src/components/Layout/Container/Container";
import Product from "/src/components/Product/Product";
import Pagination from "../Pagination/Pagination";
import s from './Goods.module.scss';

const Goods = ({ title }) => {
  const { goodsList } = useSelector(state => state.goods);
  return (
    <section className={s.goods}>
      <Container>
        <h2 className={s.title}>{title ?? 'Новинки'}</h2>
        <ul className={s.list}>
          {goodsList?.map(item => (
            <li key={item.id}>
              <Product key={item.id} {...item} />
            </li>
          ))
          }
        </ul>
        <Pagination />
      </Container>
    </section>
  )
};

export default Goods;