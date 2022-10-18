import React from 'react';
import MainVisual from './MainVisual';
import BestProduct from './BestProduct';
import NewIn from './NewIn';

function Main({ ITMDATA, NAVDATA }) {
    return (
        <main>
            <MainVisual />
            <BestProduct ITMDATA={ITMDATA} NAVDATA={NAVDATA} />
            <section className='New csc'>
                <div className="inner">
                    <div className="img">
                        <figure className='new01'>
                            <p>This jacket: fall ready.</p>
                            <span>가을의 기본아이템, 트렌치코트.<br />날씨 변화에 비바람을 막아주는 트렌치코트로<br /> 몸을 보호해 보세요.</span>
                            <button className='sbtn2'>여성 아우터 쇼핑하기</button>
                        </figure>
                        <figure className='new02'>
                            <p>Head out for the day.</p>
                            <span>넉넉한 수납공간, 4방향 스트레치<br />  소재와 가벼운 비로부터 보호하는 재킷과<br /> 여행을 떠나보세요.</span>
                            <button className='sbtn2'>남성 아우터 쇼핑하기</button>
                        </figure>
                    </div>
                </div>
            </section>
            <NewIn ITMDATA={ITMDATA} NAVDATA={NAVDATA} />
        </main>
    )
}

export default Main;