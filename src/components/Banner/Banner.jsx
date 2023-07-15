import { NavLink } from 'react-router-dom';
import { useMedia } from 'react-use';
import { useEffect, useRef } from 'react';
import { API_URL } from '/src/const.js';
import Container from "/src/components/Layout/Container/Container";
import s from './Banner.module.scss';

const Banner = ({ data }) => {
    const bannerRef = useRef()
    const isMobile = useMedia('(max-width: 540px)');
    const isTablet = useMedia('(max-width: 768px)');
    const isLaptop = useMedia('(max-width: 1024px)');

    useEffect(() => {
        const setBannerSize = (size) => {
            if (bannerRef.current) {
                bannerRef.current.style.backgroundImage = `url(${API_URL}/${data.bg[size]})`
            }
        }
        if (isMobile) {
            setBannerSize('mobile');
        } else if (isTablet) {
            setBannerSize('tablet');
        } else if (isLaptop) {
            setBannerSize('laptop');
        } else {
            setBannerSize('desktop');
        }
    }, [isMobile, isTablet, isLaptop, data]);

    return (
        data &&
        <section
            ref={bannerRef}
            className={s.banner}
        >
            <Container>
                <div className={s.content}>
                    <h2 className={s.title}>{data.description}</h2>
                    <NavLink className={s.link} to={`/product/${data.id}`}>
                        Перейти
                    </NavLink>
                </div>
            </Container>
        </section>
    )
}

export default Banner;