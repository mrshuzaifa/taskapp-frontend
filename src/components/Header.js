import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { logout, reset } from '../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector( state => state.auth);
    const logoutHandler = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    }
     
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'><img src='images.png'alt='logo' width={100} height={100}/></Link>
            </div>
            <ul>
            { user ? (
                <>
                <p>Hi, {user && user.name}</p>
                <li>
                    <button className='btn' onClick={ logoutHandler }><FaSignOutAlt /> Logout</button>
                </li>
                </>

                ) : (
                    <>
                    <li><Link to='/login'><FaSignInAlt /> Login</Link></li>
                    <li><Link to='/register'><FaUser /> Register</Link></li>
                    </>
                )
            }
            </ul>
        </header>
    )
}
export default Header