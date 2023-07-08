import { useParams } from "react-router-dom"
import Container from "../../components/Layout/Container/Container";

const MainPage = ({ gender = 'women' }) => {
    const { category } = useParams();

    return (
        <Container>
            <div>MainPage {gender}</div>
            {category && <p>Категория: {category}</p>}
        </Container>
    )
};

export default MainPage