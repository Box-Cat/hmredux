import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { authenticateAciton } from '../redux/actions/authenticateAction';

const Navbar = () => {
    const menuList = [
        '여성',
        'Divided',
        '남성',
        '신생아/유아',
        '아동',
        'H&M Home',
        'Sale',
        '지속가능성',
    ]
    let [width, setWidth] = useState(250);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let authenticate = useSelector(state => state.auth.authenticate);
    const logOut = () =>{
        authenticate = false;
        dispatch(authenticateAciton.logout(authenticate))
        navigate('/');
    }

    const search = (event) => {
        if (event.key == "Enter") {
            let keyword = event.target.value
            navigate(`/?q=${keyword}`);
        }
    }

    return (
        <div>
            <button className="hide" onClick={() => { setWidth(250) }}>메뉴판</button>
            <div className='side-menu hide' style={{ width: width }}>
                <button className="closebtn" onClick={() => setWidth(0)}>
                    &times;
                </button>
                <div className='side-menu-area'>
                    <ul className='side-menu-list'>
                        {menuList.map((menu, key) => (
                            <li key={key}>{menu}</li>
                        ))}
                    </ul>
                </div>
            </div>
            {authenticate ? (
                <div className='login-button' onClick={logOut}> 
                    <FontAwesomeIcon icon={faUser} />
                    <span>로그아웃</span>
                </div>
            ) : (
                <div className='login-button' onClick={() => navigate("/login")}>
                    <FontAwesomeIcon icon={faUser} />
                    <span>로그인</span>
                </div>
            )}
            <div className='nav-section'>
                <img
                    width={100}
                    src="https://3dwarehouse.sketchup.com/warehouse/v1.0/content/public/3e17273b-330d-4466-b158-d302aaa27d43"
                    onClick={() => { navigate('/') }}
                />
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu, key) => (
                        <li key={key}>{menu}</li>
                    ))}
                </ul>
                <div className='search-box'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" onKeyPress={(event) => search(event)} />
                </div>
            </div>
        </div>
    )
}

export default Navbar