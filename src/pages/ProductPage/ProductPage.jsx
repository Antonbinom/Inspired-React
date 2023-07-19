import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchProduct } from '/src/features/productSlice';
import { fetchCategory } from '/src/features/goodsSlice';

import { API_URL } from "/src/const";
import { ReactComponent as Like } from '/src/assets/Heart.svg';
import Container from '/src/components/Layout/Container/Container'
import ColorList from '/src/components/ColorList/ColorList';
import Count from '/src/components/Count/Count';
import Goods from '/src/components/Goods/Goods';
import ProductSize from '/src/components/ProductSize/ProductSize';
import s from './ProductPage.module.scss'
import cn from 'classnames';


const ProductPage = () => {
    const [selectedColor, setSelectedColor] = useState('')
    const [selectedSize, setSelectedSize] = useState('')

    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const { id } = useParams();
    const { product } = useSelector(state => state.product);
    const { gender, category } = product;


    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [dispatch, id])

    useEffect(() => {
        dispatch(fetchCategory({ gender, category, count: 4, top: true, exclude: id }))
    }, [dispatch, gender, category, id])

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value)
    }
    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value)
    }

    const handleIncrement = () => {
        setCount(prevCount => ++prevCount)
    }
    const handleDecrement = () => {
        count > 1 && setCount(prevCount => --prevCount)
    }

    return (
        <>
            <section className={s.card}>
                <Container className={s.container}>
                    {product.pic && (<img className={s.image} src={`${API_URL}/${product.pic}`} alt={`${product.title}`} />)}
                    <form className={s.content}>
                        <h2 className={s.title}>{product.title}</h2>

                        <p className={s.price}>руб {product.price}</p>

                        <div className={s.vendorCode}>
                            <span className={s.subtitle}>Артикул</span>
                            <span className={s.id}>{product.id}</span>
                        </div>

                        <div className={s.color}>
                            <p className={cn(s.subtitle, s.colorTitle)}>Цвет</p>
                            {product.colors && (<ColorList
                                colors={product.colors}
                                selectedColor={selectedColor}
                                handleColorChange={handleColorChange}
                            />)}
                        </div>

                        <ProductSize
                            size={product.size}
                            selectedSize={selectedSize}
                            handleSizeChange={handleSizeChange} />

                        <div className={s.description}>
                            <p className={cn(s.subtitle, s.descriptionTitle)}>Описание</p>
                            <p className={s.descriptionText}>{product.description}</p>
                        </div>

                        <div className={s.control}>
                            <Count
                                className={s.count}
                                count={count}
                                handleIncrement={handleIncrement}
                                handleDecrement={handleDecrement}
                            />
                            <button
                                className={s.addCart}
                                type="submit"
                            >
                                В корзину
                            </button>

                            <button
                                className={s.favorite}
                                aria-label="Добавить в избранное"
                                type="button"
                            >
                                <Like />
                            </button>
                        </div>
                    </form>
                </Container>
            </section>
            <Goods title="Вам также может понравиться" />
        </>
    )
}

export default ProductPage