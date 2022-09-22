import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

// import LogoSrc from '../../public/assets/images/logo.png'

// const LOGO = styled.h1`
// background-image: url(${LogoSrc});
// `


const Header = ({ ND }) => {

    const [HeadChange, setHeadChange] = useState(false)

    const [TG, setTG] = useState([false, false]);


    const HeaderStyle = styled.header`
    line-height: 60px;
    div {
        display: flex;
        justify-content: space-between;
    }
    h1 {
        a {
            display: block;
            img {
                width: 100px;
                font-size: 0;
                vertical-align: middle;
            }  
        }
    }
`
    const ServiceStyle = styled.section`
display: flex;
flex-direction:row;
gap: 20px;
font-size: 17px;    
.top_search {
    margin-right: 5px;
    .search_box {
        width: auto;
        text-align: center;
     verstical-align : middle;
        form {
            display: flex;
            margin: auto 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.8);
            input[type="text"] {
                font-size: 13px;
                border: none;
                outline: none;
                border-bottom: 2px solid var(--dc);
            }
            button {
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                i {
                    font-size: 16px;
                }
            }
        }
    }
}
.login {
    position: relative;
    &.on {
        .login_box {
            display: block; 
            z-index: 9999;
        }
    }
    strong{
        cursor: pointer;
    }
    .login_box {
        display: none;
        position: absolute;
        top: 100px;
        left: 50%;
        width: 120px;
        transform: translateX(-50%);
        line-height: 2;
        border: 1px solid rgba(0, 0, 0, 0.2);
        background: #f7f7f7;
        li {
            font-size: 13px;
            font-weight: 300;
            text-align: center;
            padding: 5px 0;
        }
        li~li {
            border-top: 1px solid rgba(212, 25, 53, 0.3);
        }
    }
}
`
    const NavStyle = styled.nav`
ul {
    display: flex;
    margin:0 0 0 100px;
    gap: 40px;
    text-align: center;
    li {
        position: relative;
        font-size: 15px;
        font-weight: 500;
        a {
            display: block;
        }  

        ul {
            display: none;
            position: absolute;
            top: 60px;
            left: 50%;
            transform: translateX(-50%);
            width: 140px;
            line-height: 2;
            background: #f7f7f7;
            li {
                font-size: 13px;
                padding: 5px 0;
                border-top: 1px solid rgba(0, 0, 0, 0.2);
                a {
                    display: block;
                }
            }
            li~li {
                border-top: 1px solid rgba(212, 25, 53, 0.3);
            }
        }
        &:hover {
            ul {
                display: block;
                font-size: 15px;
                font-weight: 300;
                z-index: 9999;
            }
        }
    }   
}
`

    return (
        <HeaderStyle>
            {/* <header className='Header'> */}
            <div class="inner">
                <NavStyle>
                    <ul className="mNav" onClick={() => {

                    }}>
                        {
                            ND.map(
                                (el, idx) => (<li key={el.navid}>
                                    <NavLink to={el.alink} >
                                        {el.title}
                                        <ul className="sNav">
                                            {
                                                el.submenu.map(
                                                    smenu => (<li key={el.sid}><a href={smenu.slink}>{smenu.stitle}</a></li>)
                                                )
                                            }
                                        </ul>
                                    </NavLink>
                                </li>)
                            )
                        }

                    </ul>
                </NavStyle >
                <h1>
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + `/assets/images/logo.png`} alt="" />
                    </Link>
                </h1>
                <ServiceStyle>
                    <div className='top_search'>
                        <div className="search_box">
                            <form action="#!">
                                <input type="text" placeholder="룰루레몬 상품 검색" required />
                                <button>
                                    <i className="xi-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className={'login ' + (TG[0] ? 'on' : '')}>
                        <strong onClick={() => setTG([!TG[0], false])}><i className="xi-user-o"></i></strong>
                        <ul className="login_box">
                            <li><a href="#!">로그인</a></li>
                            <li><a href="#!">위시리스트</a></li>
                        </ul>
                    </div>
                    <div class="cart">
                        <strong><i class="xi-cart-o"></i></strong>
                    </div>
                </ServiceStyle>

            </div>
        </HeaderStyle>
    )
}

export default Header;