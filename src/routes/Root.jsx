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
            { link: 'underwear ', title: 'Трусы' },
            { link: 'socks', title: 'Носки' },
            { link: 'robe', title: 'Халаты' },
            { link: 'thermal', title: 'Термобелье' },
            { link: 'pajamas', title: 'Пижамы' },
        ],
    },
    {
        link: 'men',
        title: 'Мужчины',
        categories: [
            { link: 'underwear ', title: 'Трусы' },
            { link: 'socks', title: 'Носки' },
            { link: 'robe', title: 'Халаты' },
            { link: 'thermal', title: 'Термобелье' },
        ],
    }

];

const Root = () => (
    <>
        <Header />
        <Main>
            <Outlet />
        </Main>
        <Footer />
    </>
)

export default Root