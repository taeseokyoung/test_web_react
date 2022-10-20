import '../css/Product.scss'
// import { useEffect, useRef, useState } from 'react';
import { Link, useParams, useNavigate, NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";




const Itms = ({ NAVDATA, FILTER, ITMDATA }) => {


    const { id } = useParams();
    // const navigate = useNavigate();
    const matchItm = ITMDATA.find(it => id === String(it.id));



    return (
        <section className='Itm'>
            <div className='inner'>
                <div className='left'>
                    <Slider className='big'>
                        <figure>
                            <img src={process.env.PUBLIC_URL + '/assets/images/s' + matchItm.id + '.jpg'} alt="" />
                        </figure>
                    </Slider>
                    {/* <ul className="slideTab">
                        {
                            SLIDE.map((dots, idx) => {
                                return (
                                    <li key={dots.id} className={idx === IDX ? " on" : ""} onClick={() => mainSlide.current.slickGoTo(idx)}>{dots.dot}</li>
                                )
                            })
                        }
                    </ul> */}
                    {/*<div className="slideArrows">
                        <button onClick={() => mainSlide.current.slickPrev()}><i className='xi-arrow-left'></i></button>
                        <button onClick={() => mainSlide.current.slickNext()}><i className='xi-arrow-right'></i></button>
                    </div> */}

                </div>
                <div className='right'>
                    <div className='decription'>
                        <ul className='Kategorie'>
                            <li>{matchItm.gender}</li>
                            {
                                matchItm.filter.map((it, idx) => <li key={idx}>{it}</li>)
                            }
                        </ul>
                        <div className='sprice'>{matchItm.price}</div>
                    </div>
                    <div className='sptitle'>{matchItm.product}</div>
                    <ul className='sdec'>
                        {
                            matchItm.dec.map((it, idx) => <li key={idx}>{it}</li>)
                        }
                    </ul>
                    <div className="choosecolor">
                        {/* <span>색상 : 화이트</span> */}
                        <ul className='scolor'>
                            {
                                matchItm.color.map((it, idx) => <li style={{ background: it }} key={idx}></li>)
                            }
                            {/* <li style={{ background: `${ITMDATA[0].color[1]}` }}></li> */}
                        </ul>
                    </div>
                    <div className='sSize'>
                        <div>사이즈 선택</div>
                        <div>사이즈 가이드</div>
                    </div>
                    <ul className='sSizebox'>
                        <li>0</li>
                        <li>2</li>
                        <li>4</li>
                        <li>6</li>
                        <li>8</li>
                        <li>10</li>
                        <li>12</li>
                        <li>14</li>
                        <li>16</li>
                        <li>18</li>
                        <li>20</li>
                    </ul>
                    <div className='scount'>
                        <div>수량</div>
                        <div className="countIcon">
                            <i className='xi-plus-min'></i>
                            <i className='xi-minus-min'></i>
                        </div>

                    </div>
                    <div className="pButton">
                        <div className='sbuy'>
                            <button className='sbtn'>바로구매</button>
                        </div>
                        <div className='spcart'>
                            <button className='sbtn2'>장바구니</button>
                            <button className='sbtn2'>위시리스트<i className='xi-heart-o'></i> </button>
                        </div>
                    </div>
                    <ul className='sDetail'>
                        <li>
                            <a href='#!' className='detailTitle'>
                                <p>Product Features</p>
                                <i className='xi-angle-down-min'></i>
                            </a>
                            <ul className='detailDec'>
                                <li>바디라인이 드러나는 핏</li>
                                <li>웨이스트밴드 아래까지 내려오는 길이</li>
                            </ul>
                        </li>
                        <li className='dotMenu'>
                            <a href='#!' className='detailTitle'>
                                <p>Nulux™ 원단</p>
                                <i className='xi-angle-down-min'></i>
                            </a>
                            <ul className='detailDec'>
                                <li>초경량</li>
                                <li>엔지니어드 4방 스트레치</li>
                                <li>속건성</li>
                                <li>땀 배출력</li>
                                <li>통기성</li>
                                <li>매끄럽고 시원한 감촉</li>
                                <li>Lycra™ 엘라스테인 원사가 더해져 탁월한 신축성과 복원력</li>
                                <li>땀이 많이 나는 부분에는 메쉬 원단을 사용해 탁월한 통기성</li>
                            </ul>
                        </li>
                        <li className='return'>
                            <a href='#!' className='detailTitle'>
                                <p>배송 및 반품정책</p>
                                <i className='xi-angle-down-min'></i>
                            </a>
                            <ul className='detailDec'>
                                <li>
                                    <span>[출고 및 배송 지연 안내]</span>
                                    COVID-19 상황으로 인해 홍콩 내 항공 스케줄이 지연되어, 접수된 주문 건의 출고 및 통관이 영업일 1-3일 가량 지연될 수 있습니다. 이 점 양해 부탁드리며, 빠른 배송을 위해 최선을 다하겠습니다.
                                </li>
                                <li>
                                    <span>[온라인 스토어 반품 정책]</span>
                                    제품이 마음에 들지 않아서 반품을 생각하고 계신다면 안심하세요. 룰루레몬 온라인 스토어에서 구매한 제품은 수령일로부터 30일 이내에 반품 신청할 수 있어요. 반품 신청 전에 제품 택이 부착되어 있는지, 착용 및 세탁하지 않은 상태인지 다시 한 번 체크해주세요.
                                </li>
                                <li>
                                    1. 제품을 받은 날로부터 30일 이내에 게스트 에듀케이션 센터(GEC)에 이메일(gec.kr@lululemon.com) 또는 전화(070.4769.7965)로 반품 의사를 남겨주세요.
                                    주문번호(ex. KR00123456)/성함/반품할 제품 목록을 함께 알려주시면 빠른 처리가 가능해요.
                                </li>
                                <li>
                                    2. 반품이 접수되면 CJ대한통운 기사님이 연락 후 제품 수거를 진행합니다. 제품을 포장하신 후 CJ대한통운 기사님께 전달해주세요.
                                </li>
                                <li>
                                    3. 제품이 회수되면 검수 절차를 거쳐 환불이 진행됩니다. 환불 시에는 환불 완료 확인 이메일을 발송해드리며, 환불 처리에 영업일 7일-10일가량 소요될 수 있음을 참고해주세요. (거래은행 혹은 카드사마다 취소 기간 상이)
                                </li>
                                <li>
                                    *룰루레몬 반품 규정에 의거한 반품이 어려운 경우 이메일으로 알려 드립니다.
                                </li>
                                <li>
                                    *CJ대한통운이 아닌 타 택배사를 통하여 반품하는 경우 선불 택배만 가능하며, 착불 택배의 경우 반송될 수 있습니다. 또한, 제품 훼손 및 분실은 도움을 드릴 수 없음을 참고해주세요.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section >
    )
}

export default Itms;