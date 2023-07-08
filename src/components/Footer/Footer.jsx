import s from "./Footer.module.scss";
import Container from "../Layout/Container/Container";
import Category from "./Category/Catregory";
import Social from "./Social/Social";
import Contacts from "./Contacts/Contacts";
import Development from "./Development/Development";
import Copyright from "./Copyright/Copytight";

const Footer = ({ list }) => (
    <footer>
        <Container >
            <div className={s.container}>
                <Category list={list} title="Католог" />
                <Social title="Связаться с нами" />
                <Contacts />
                <Development />
                <Copyright />
            </div>
        </Container >
    </footer>
)

export default Footer
