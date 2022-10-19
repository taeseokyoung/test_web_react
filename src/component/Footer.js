import React from 'react'


const Footer = ({ FOOTDATA }) => {
    return (
        <footer className="Footer">
            <div className="newsletter">
                <div className="inner">
                    <strong>룰루레몬 뉴스레터 구독 신청</strong>
                    <p>룰루레몬 신제품, 스웻라이프 컨텐츠 및 이벤트 소식을 제일 먼저 받아보세요. 구독은 언제든지 취소 할 수 있어요.</p>
                    <button className="cbtn">구독 신청하기</button>
                </div>
            </div>
            <div className="footmenu">
                <div className="inner top">
                    <div className='left'>
                        <figure className='slogo'>룰루레몬</figure>
                    </div>
                    <div className='middle'>
                        <ul className="mid">
                            {
                                FOOTDATA.map((el, idx) => {
                                    return (
                                        <li key={el.id}>
                                            <a href={el.alink}>{el.title}</a>
                                            <ul className="fstit">
                                                {
                                                    el.submenu.map(
                                                        smenu => (<li key={el.sid}><a href={smenu.slink}>{smenu.stitle}</a></li>)
                                                    )
                                                }
                                            </ul>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="important">
                            <li>개인정보처리방침</li>
                            <li>이용약관</li>
                            <li>사이트맵</li>
                        </ul>
                    </div>
                    <div className="social right">
                        <a href="https://pf.kakao.com/_NUqxmxl" target="_blank">
                            <i className='xi-kakaotalk'></i></a>
                        <a href="https://www.instagram.com/lululemonkr/" target="_blank">
                            <i className='xi-instagram'></i></a>
                        <a href="https://www.facebook.com/lululemonseoul" target="_blank">
                            <i className='xi-facebook'></i></a>
                    </div>
                </div>
                <div className="bottom">
                    <div className="up">
                        <div className='inner'>
                            <ul className='left'>
                                <li>CONTACT US<span>게스트 에듀케이션 센터(GEC)</span></li>
                                <li><a href="tel:070-4769-7965">전화문의 : 070-4769-7965</a></li>
                                <li><a href="mailto:gec.kr@lululemon.com">이메일 : gec.kr@lululemon.com</a></li>
                            </ul>
                            <div className='copyright'>&copy; lululemon athletica Korea ltd. All rights reserved</div>
                        </div>
                    </div>
                    <div className="down">
                        <ul className="inner">
                            <li>룰루레몬애틀라티카코리아 유한회사</li>
                            <li>대표 : 가레스다니엘제임스포프</li>
                            <li>개인정보관리책임자 : 줄리 에버릴</li>
                            <li>주소 : 서울시 강남구 선릉로 835, 3층</li>
                            <li>사업자 등록번호 : 220-88-88573</li>
                            <li>통신판매업신고번호 : 2018-서울강남-01176</li>
                            <li>호스팅 서비스 사업자 : Salesforce.com inc.</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <dl>
                {
                    FOOTDATA.map(el => {
                        return (
                            <ul key={el.navid}>{el.title}</ul>
                            <dd>
                                {
                                    el.submenu.map(sel => {
                                        return(
                                        <dd>{sel.stitle}</dd>  
                                        )
                                    })
                                }
                            </dd>
                        )
                    })
                }
            </dl> */}
        </footer >
    )
}

export default Footer