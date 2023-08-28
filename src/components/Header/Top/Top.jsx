import Container from "../../Layout/Container/Container";
import s from "./Top.module.scss";
import cn from "classnames";
import logo from "/src/assets/logo.svg";
import { ReactComponent as Cart } from '/src/assets/cart.svg';
import { ReactComponent as Search } from '/src/assets/search.svg';

import { NavLink } from "react-router-dom";
import BtnLike from "../../BtnLike/BtnLike";
const Top = () => (
  <div className={s.top}>
    <Container className={s.container}>
      <a className={cn(s.link, s.phone)} href="tel:89998765432">
        8 999 876 54 32
      </a>
      <NavLink className={s.logo} to="/">
        <img src={logo} alt="Логотип Inspared" />
      </NavLink>
      <div className={s.navigation}>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <NavLink className={s.link}>
              <Search />
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to='/cart' className={s.link}>
              <Cart />
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to='/favorite' className={cn(s.link, s.like)}>
              <BtnLike />
            </NavLink>
          </li>
        </ul>
      </div>
    </Container>
  </div>
);

export default Top;
