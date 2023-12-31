import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    return(
        <div className="header-container"> 
            <div className="header-wrap">
                <div className="header-left-wrap">
                    <Link to='/'>
                        <img
                        style={{width:"154px", height:"20px"}}
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                        alt="로고"
                        />
                    </Link>
                    <ul>
                        <li>
                            <Link className="header-nav-item" to="/movies">
                                영화
                            </Link>
                        </li>
                        <li>
                            <Link className="header-nav-item" to="/tv">
                                TV 프로그램
                            </Link>
                        </li>
                        <li>
                            <Link className="header-nav-item" to="/person">
                                인물
                            </Link>
                        </li>
                        <li>
                            <Link className="header-nav-item"></Link>
                        </li>
                        <li>
                            <button onClick = {() => navigate('/LoginPage')} 
                            className="header-nav-item"
                            style={{
                                color:"black",
                                borderRadius:"10px",
                            }}
                            >로그인</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Header;