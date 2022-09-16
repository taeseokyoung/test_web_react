import { useState } from "react";

const TopService = () => {

    const [TG, setTG] = useState([false, false]);

    return (

        <section className="top_service">
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
                <i class="xi-cart-o"></i>
            </div>
        </section >

    )
}

export default TopService;