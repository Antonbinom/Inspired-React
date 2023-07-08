import cn from "classnames";
import s from "./Contacts.module.scss";
const Contacts = () => (
    <div className={s.contacts}>
        <a className={cn(s.link, s.title)} href="mailto:Inspired@gmail.com">Inspired@gmail.com</a>
        <a className={cn(s.link, s.title)} href="tel:+79304902620">8 930 490 26 20</a>
    </div>
)

export default Contacts