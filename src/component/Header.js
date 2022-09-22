import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// import LogoSrc from '../../public/assets/images/logo.png'

// const LOGO = styled.h1`
// background-image: url(${LogoSrc});
// `

const Header = ({ ND }) => {

    // const [HeadChange, setHeadChange] = useState(false)

    const [TG, setTG] = useState([false, false]);

    return (
        <header className="Header">
            <div class="inner">
                <nav className='Gnb'>
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
                </nav >
                <h1>
                    <Link to="/">
                        {/* <img src={process.env.PUBLIC_URL + `/assets/images/logo.png`} alt="" /> */}
                    </Link>
                </h1>
                <div className='top_service'>
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
                </div>
            </div>
        </header>
    )
}

export default Header;