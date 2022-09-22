import './App.css';
import { Route, Routes } from 'react-router-dom';
import Wrapper from './component/Wrapper';
import TopBanner from './component/TopBanner';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import Sub01 from './pages/Sub01';
import SubPd01 from './pages/SubPd01';


function App() {

  const NavData = [
    {
      navid: 1, title: "신제품", alink: "/sub01",
      submenu: [
        // { sid: 1, stitle: "컬렉션", slink: "#!" },
        // { sid: 2, stitle: "액티비티", slink: "#!" },
        // { sid: 3, stitle: "상의", slink: "#!" },
        // { sid: 4, stitle: "하의", slink: "#!" },
      ]
    },
    {
      navid: 2, title: "여성", alink: "#!",
      submenu: [
        { sid: 1, stitle: "컬렉션", slink: "#!" },
        { sid: 2, stitle: "액티비티", slink: "#!" },
        { sid: 3, stitle: "상의", slink: "#!" },
        { sid: 4, stitle: "하의", slink: "#!" },

      ]
    },
    {
      navid: 3, title: "남성", alink: "#!",
      submenu: [
        { sid: 1, stitle: "컬렉션", slink: "#!" },
        { sid: 2, stitle: "액티비티", slink: "#!" },
        { sid: 3, stitle: "상의", slink: "#!" },
        { sid: 4, stitle: "하의", slink: "#!" },

      ]
    },
    {
      navid: 4, title: "액세서리", alink: "#!",
      submenu: [
        { sid: 1, stitle: "가방", slink: "#!" },
        { sid: 2, stitle: "요가소도구", slink: "#!" },
        { sid: 3, stitle: "요가 매트", slink: "#!" },
        { sid: 4, stitle: "장갑", slink: "#!" },
        { sid: 5, stitle: "헤어 액세서리", slink: "#!" },
        { sid: 6, stitle: "모자", slink: "#!" },
        { sid: 7, stitle: "양말", slink: "#!" },

      ]
    },
    {
      navid: 5, title: "커뮤니티", alink: "#!",
      submenu: [
        { sid: 1, stitle: "룰루레몬", slink: "#!" },
        { sid: 2, stitle: "앰버서더", slink: "#!" },
        { sid: 3, stitle: "스웻라이프", slink: "#!" },
      ]
    }
  ]

  const FilterP = [
    {
      id: 1, title: "성별", link: "#!",
      content: [
        { cid: 1, ctitle: "여성", link: "#!" },
        { cid: 2, ctitle: "남성", link: "#!" },
        { cid: 3, ctitle: "공용", link: "#!" },
      ]
    },
    {
      id: 2, title: "카테고리 분류", link: "#!",
      content: [
        { cid: 1, ctitle: "상의", link: "#!" },
        { cid: 2, ctitle: "하의", link: "#!" },
        { cid: 3, ctitle: "조거", link: "#!" },
        { cid: 4, ctitle: "레깅스 & 타이츠", link: "#!" },
        { cid: 5, ctitle: "후디 & 스웻셔츠", link: "#!" },
        { cid: 6, ctitle: "아우터", link: "#!" },
        { cid: 7, ctitle: "양말", link: "#!" },
        { cid: 8, ctitle: "수영복", link: "#!" },
        { cid: 9, ctitle: "언더웨어", link: "#!" },
      ]
    },
    {
      id: 3, title: "색상", link: "#!",
      content: [
        { cid: 1, ctitle: "검정색", link: "#!" },
        { cid: 2, ctitle: "회색", link: "#!" },
        { cid: 3, ctitle: "흰색", link: "#!" },
        { cid: 4, ctitle: "빨간색", link: "#!" },
        { cid: 5, ctitle: "노란색", link: "#!" },
        { cid: 6, ctitle: "주황색", link: "#!" },
        { cid: 7, ctitle: "녹색", link: "#!" },
        { cid: 8, ctitle: "파란색", link: "#!" },
        { cid: 9, ctitle: "분홍색", link: "#!" },
        { cid: 10, ctitle: "보라색", link: "#!" },
      ]
    },
    {
      id: 4, title: "컬렉션", link: "#!",
      content: [
        { cid: 1, ctitle: "온라인 한정", link: "#!" },
        { cid: 2, ctitle: "아시아핏", link: "#!" },
        { cid: 3, ctitle: "룰루레몬랩", link: "#!" },
        { cid: 4, ctitle: "얼라인", link: "#!" },
        { cid: 5, ctitle: "스위프틀리", link: "#!" },
        { cid: 6, ctitle: "ABC", link: "#!" },
        { cid: 7, ctitle: "메탈 벤트 테크", link: "#!" },
      ]
    },
    {
      id: 5, title: "액티비티", link: "#!",
      content: [
        { cid: 1, ctitle: "요가", link: "#!" },
        { cid: 2, ctitle: "데일리웨어", link: "#!" },
        { cid: 3, ctitle: "트레이닝", link: "#!" },
        { cid: 4, ctitle: "골프", link: "#!" },
        { cid: 5, ctitle: "러닝", link: "#!" },
        { cid: 6, ctitle: "하이킹", link: "#!" },
        { cid: 7, ctitle: "테니스", link: "#!" },
      ]
    },

  ]

  const SingleP = [
    { id: 1, product: "Nulux 하프집 롱슬리브 셔츠", price: "138,000원", color: ["#eaeaec", "#222222"], dec: ["Nulux™", "고강도", "트레이닝"], link: "/" },
    { id: 2, product: "코트 라이벌 하이라이즈 스커트 15", price: "65,000원 - 93,000원", color: ["#f8e8e6", "#eaeaec", "#d6d6e5", "#00223f", "#222222", "#a6005f", "#cbe89a"], dec: ["Swift™", "테니스"], link: "/", },
    { id: 3, product: "퀵 드라잉 숏슬리브 폴로 셔츠", price: "65,000원 - 93,000원", color: ["#cbe89a", "#eaeaec", "#d6d6e5", "#222222"], dec: ["클래식", "골프", "테니스"], link: "/", },
    { id: 4, product: "플리티드 라인드 하이라이즈 테니스 스커트", price: "65,000원 - 93,000원", color: ["#d8d2b2", "#eaeaec", "#a4999a", "#444144", "#222222", "#e78d85", "#dbb1ad", "#e1b3b9", "#acacac", "#bbdecd"], dec: ["Swift™", "테니스"], link: "/", },
    { id: 5, product: "인비고레이트 트레이닝 탱크탑", price: "93,000원", color: ["#222222", "#9a9977", "#f14655", "#d1d884"], dec: ["Everlux™", "고강도", "트레이닝"], link: "/", },
    { id: 6, product: "패스트 앤 프리 하이라이즈 쇼츠 6", price: "93,000원", color: ["#00213f", "#945443", "#403d41", "#222222", "#a3005e"], dec: ["Nulux™", "초경량", "러닝"], link: "/", },
    { id: 7, product: "모달 실크 요가 탱크탑", price: "62,000원 - 78,000원", color: ["#eaeaec", "#f59244", "#878450", "#d7d7e7"], dec: ["요가"], link: "/", },
    { id: 8, product: "라이크 어 클라우드 브라", price: "55,000원 - 93,000원", color: ["#b27db8", "#e68d84", "#e1b3b9", "#eaeaec", "#f69045", "#352b24", "#fc757a", "#9f8967", "#f7eae7", "#d5d4e4"], dec: ["요가"], link: "/", },
  ]


  return (
    <Wrapper>
      <TopBanner />
      <Header ND={NavData} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sub01' element={<Sub01 ND={NavData} FP={FilterP} SP={SingleP} />} />
        <Route path='/sub01/p01' element={<SubPd01 SP={SingleP} />} />
      </Routes>
      {/* <Main /> */}
      <Footer />
    </Wrapper>
  );
}


export default App;
