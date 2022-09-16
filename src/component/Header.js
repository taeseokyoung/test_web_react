import Nav from './Nav'
import TopService from './TopService'

const Header = () => {
    return (
        <header className='Header'>
            <div class="inner">
                <Nav />
                <h1>
                    <a href=''>
                        룰루레몬
                    </a>
                </h1>
                <TopService />
            </div>

        </header>
    )
}

export default Header;