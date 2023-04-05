import { useSelector, useDispatch } from 'react-redux';  // Redux login register
import { logout } from '../redux/reducers/authSlice';
import Link from 'next/link';


export default function Greating() {

    // Code to show username when it logins
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const currentUser = useSelector((state) => state.auth.currentUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <>
            {isAuthenticated ? (
                <>
                    <span>Welcome, {currentUser.username}! </span>
                </>
            ) : (
                <>
                    <Link href={'/login'}>
                        Please Login
                    </Link>
                </>
            )}
        </>
    )
}