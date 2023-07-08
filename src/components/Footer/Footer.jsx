import s from "./Footer.module.scss";
import Container from "../Layout/Container/Container";
import Category from "./Category/Catregory";
import Social from "./Social/Social";
import Contacts from "./Contacts/Contacts";
import Development from "./Development/Development";
import Copyright from "./Copyright/Copytight";

const Footer = () => (
    <Container className={s.container}>
        <Category />
        <Social />
        <Contacts />
        <Development />
        <Copyright />
    </Container >
)

export default Footer
