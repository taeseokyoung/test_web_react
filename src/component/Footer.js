import React from 'react'

const FOOTDATA = [
    {
        id: 1, title: "MY ACCOUNT", alink: "#!",
        submenu: [
            { sid: 1, stitle: "내 계정", slink: "#!" },
            { sid: 2, stitle: "위시리스트", slink: "#!" },
            { sid: 3, stitle: "주문/배송조회", slink: "#!" },
            { sid: 4, stitle: "취소/반품", slink: "#!" },
        ]
    },
    {
        id: 2, title: "SUPPORT", alink: "#!",
        submenu: [
            { sid: 1, stitle: "고객센터", slink: "#!" },
            { sid: 2, stitle: "수선 안내", slink: "#!" },
            { sid: 4, stitle: "FAQ", slink: "#!" },
            { sid: 5, stitle: "기프트 카드", slink: "#!" },
            { sid: 6, stitle: "이용약관", slink: "#!" },
        ]
    },
    {
        id: 3, title: "ABOUT US", alink: "#!",
        submenu: [
            { sid: 1, stitle: "브랜드스토리", slink: "#!" },
            { sid: 2, stitle: "사회공헌 프로그램", slink: "#!" },
            { sid: 3, stitle: "팀세일 및 벌크세일", slink: "#!" },
            { sid: 3, stitle: "친구 추천 캠페인", slink: "#!" },
            { sid: 4, stitle: "룰루레몬 멤버쉽", slink: "#!" },
            { sid: 5, stitle: "채용안내", slink: "#!" },


        ]
    },
]


const Footer = () => {
    return (
        <footer className="Footer">
            <div className="newsletter">
                <div className="inner">
                    <strong>룰루레몬 뉴스레터 구독 신청</strong>
                    <p>룰루레몬 신제품, 스웻라이프 컨텐츠 및 이벤트 소식을 제일 먼저 받아보세요. 구독은 언제든지 취소 할 수 있어요.</p>
                    <button className="cbtn">구독 신청하기</button>
                </div>
            </div>
            <div className="social">

            </div>
            <div className="footmenu">
                <div className="inner">
                    <ul className="left">
                        {
                            FOOTDATA.map(
                                (el, idx) => (<li key={el.id}>
                                    <a href={el.alink}>{el.title}</a>
                                    <ul className="fstit">
                                        {
                                            el.submenu.map(
                                                smenu => (<li key={el.sid}><a href={smenu.slink}>{smenu.stitle}</a></li>)
                                            )
                                        }
                                    </ul>
                                </li>)
                            )
                        }

                    </ul>
                    <div className="right">
                        <div className="contect">
                            <strong>CONTACT US</strong>
                            <p>게스트 에듀케이션 센터(GEC)</p>
                            <a href="tel:070-4769-7965">전화문의 : 070-4769-7965</a>
                            <a href="mailto:gec.kr@lululemon.com">이메일 : gec.kr@lululemon.com</a>
                        </div>
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