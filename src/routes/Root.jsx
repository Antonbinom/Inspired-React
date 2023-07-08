import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Layout/Main/Main";

const list = [
    {
        link: 'women',
        title: 'Женщины',
        categories: [
            { link: 'bras', title: 'Бюстгалтеры' },
            { link: 'socks ', title: 'Трусы' },
            { link: 'bathrobes', title: 'Носки' },
            { link: 'thermal', title: 'Халаты' },
            { link: 'underwear', title: 'Термобелье' },
            { link: 'pajamas', title: 'Пижамы' },
        ],
    },
    {
        link: 'men',
        title: 'Мужчины',
        categories: [
            { link: 'socks ', title: 'Трусы' },
            { link: 'bathrobes', title: 'Носки' },
            { link: 'thermal', title: 'Халаты' },
            { link: 'underwear', title: 'Термобелье' },
        ],
    }

];

const Root = () => (
    <>
        <Header list={list} />
        <Main>
            <Outlet />
        </Main>
        <Footer list={list} />
    </>
)

export default Root