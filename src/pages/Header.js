import styled from 'styled-components';
import Nav from '../component/Nav'
import TopService from '../component/TopService'

const Header = () => {
    return (
        <header className='Header'>
            <div class="inner">
                <Nav />
                <h1>
                    {/* <a href='/'>
                        <img src={process.env.PUBLIC_URL + `/assets/images/logo.png`} alt="" />
                    </a> */}
                    <a href='/'>
                        룰루레몬
                    </a>
                </h1>
                <TopService />
            </div>
        </header>
    )
}

export default Header;