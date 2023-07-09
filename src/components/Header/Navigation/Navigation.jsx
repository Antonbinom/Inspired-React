import Container from '../../Layout/Container/Container.jsx'
import Gender from './Gender/Gender.jsx'
import Category from './Category/Category.jsx'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { setActiveGender } from '/src/features/navigationSlice.js'

const Navigation = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const gender = pathname.split('/')[1] || 'women';

    useEffect(() => {
        dispatch(setActiveGender(gender));
    }, [gender, dispatch])

    return (
        <nav>
            <Container>
                <Gender />
                <Category />
            </Container>
        </nav>
    )
}

export default Navigation