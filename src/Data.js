const NAVDATA = [
    {
        navid: 1, title: "신제품", link: "/List",
        mainsub: [
            { sid: 1, stitle: "여성", slink: "#!", submenu: [] },
            { sid: 2, stitle: "남성", slink: "#!", submenu: [] }
        ]
    },

    {
        navid: 2, title: "여성", link: "/List/Woman",
        mainsub: [
            {
                sid: 1, stitle: "상의", slink: "#!",
                submenu: [{ wid: 1, name: "스포츠브라" }, { wid: 2, name: "탱크" }, { wid: 3, name: "숏슬리브" }, { wid: 4, name: "롱슬리브" }, { wid: 5, name: "후디&스웻셔츠" }, { wid: 6, name: "아우터" }, { wid: 7, name: "스웨터" }]
            },

            {
                sid: 2, stitle: "하의", slink: "#!",
                submenu: [{ wid2: 1, name: "조거" }, { wid2: 2, name: "레깅스" }, { wid2: 3, name: "쇼츠" }, { wid4: 1, name: "스커트" }]
            },

            { sid: 3, stitle: "원피스&점프수트", slink: "#!", submenu: [] },
            { sid: 4, stitle: "수영복", slink: "#!", submenu: [] },
            { sid: 5, stitle: "언더웨어", slink: "#!", submenu: [] }
        ]
    },

    {
        navid: 3, title: "남성", link: "/List/Man",
        mainsub: [
            {
                sid: 1, stitle: "상의", slink: "#!",
                submenu: [{ mid: 1, name: "탱크" }, { mid: 2, name: "티셔츠" }, { mid: 3, name: "셔츠" }, { mid: 4, name: "후디&스웻셔츠" }, { mid: 5, name: "아우터" }]
            },
            {
                sid: 2, stitle: "하의", slink: "#!",
                submenu: ["조거", "타이즈", "쇼츠"]
            },
            { sid: 3, stitle: "수영복", slink: "#!", submenu: [] },
            { sid: 4, stitle: "언더웨어", slink: "#!", submenu: [] }
        ]
    },

    {
        navid: 4, title: "액세서리", link: "/List/Acc",
        mainsub: [
            { sid: 1, stitle: "양말", slink: "#!", submenu: [] },
            { sid: 2, stitle: "장갑", slink: "#!", submenu: [] },
            { sid: 3, stitle: "가방", slink: "#!", submenu: [] },
            { sid: 4, stitle: "요가용품", slink: "#!", submenu: [] },
            { sid: 5, stitle: "헤어 액세서리", slink: "#!", submenu: [] },
            { sid: 6, stitle: "모자", slink: "#!", submenu: [] },
        ]
    },

    {
        navid: 5, title: "커뮤니티", link: "/List/Community",
        submenu: [
            { sid: 1, stitle: "룰루레몬", slink: "#!", submenu: [] },
            { sid: 2, stitle: "앰버서더", slink: "#!", submenu: [] },
            { sid: 3, stitle: "스웻라이프", slink: "#!", submenu: [] }
        ]
    }
]

const FILTER = [
    {
        id: 1, title: "성별", link: "#!",
        content: [
            { id: 1, title: "여성", link: "#!" },
            { id: 2, title: "남성", link: "#!" }
        ]
    },
    {
        id: 2, title: "분류", link: "#!",
        content: [
            { id: 1, title: "상의", link: "#!" },
            { id: 2, title: "하의", link: "#!" },
            { id: 3, title: "조거", link: "#!" },
            { id: 4, title: "레깅스 & 타이츠", link: "#!" },
            { id: 5, title: "후디 & 스웻셔츠", link: "#!" },
            { id: 6, title: "아우터", link: "#!" },
            { id: 7, title: "수영복", link: "#!" },
            { id: 8, title: "언더웨어", link: "#!" }
        ]
    },
    {
        id: 3, title: "색상", link: "#!",
        content: [
            { id: 1, title: "검정색", link: "#!" },
            { id: 2, title: "회색", link: "#!" },
            { id: 3, title: "흰색", link: "#!" },
            { id: 4, title: "빨간색", link: "#!" },
            { id: 5, title: "노란색", link: "#!" },
            { id: 6, title: "주황색", link: "#!" },
            { id: 7, title: "녹색", link: "#!" },
            { id: 8, title: "파란색", link: "#!" },
            { id: 9, title: "분홍색", link: "#!" },
            { id: 10, title: "보라색", link: "#!" }
        ]
    },
    {
        id: 4, title: "컬렉션", link: "#!",
        content: [
            { id: 1, title: "온라인 한정", link: "#!" },
            { id: 2, title: "아시아핏", link: "#!" },
            { id: 3, title: "룰루레몬랩", link: "#!" },
            { id: 4, title: "얼라인", link: "#!" },
            { id: 5, title: "스위프틀리", link: "#!" },
            { id: 6, title: "ABC", link: "#!" },
            { id: 7, title: "메탈 벤트 테크", link: "#!" }
        ]
    },
    {
        id: 5, title: "액티비티", link: "#!",
        content: [
            { id: 1, title: "요가", link: "#!" },
            { id: 2, title: "데일리웨어", link: "#!" },
            { id: 3, title: "트레이닝", link: "#!" },
            { id: 4, title: "골프", link: "#!" },
            { id: 5, title: "러닝", link: "#!" },
            { id: 6, title: "하이킹", link: "#!" },
            { id: 7, title: "테니스", link: "#!" }
        ]
    },

]

const ITMDATA = [
    {
        id: 1, product: "Nulux 하프집 롱슬리브 셔츠",
        price: 138000,
        color: ["#eaeaec", "#222222"],
        dec: ["Nulux™", "고강도", "트레이닝"],
        gender: "여성",
        filter: ["상의", "아우터"],
        new: false,
        img: [
            { co: "흰색", tit: ["w1", "w2", "w3", "w4", "w5"] },
            { co: "검정색", tit: ["b1", "b2", "b3", "b4", "b5"] }
        ]

    },

    {
        id: 2, product: "코트 라이벌 하이라이즈 스커트 15",
        price: 93000,
        color: ["#f8e8e6", "#eaeaec", "#d6d6e5", "#00223f", "#222222", "#a6005f", "#cbe89a"],
        dec: ["Swift™", "테니스"],
        gender: "여성",
        filter: ["하의", "스커트"],
        new: false
    },

    {
        id: 3, product: "퀵 드라잉 숏슬리브 폴로 셔츠",
        price: 93000,
        color: ["#cbe89a", "#eaeaec", "#d6d6e5", "#222222"],
        dec: ["클래식", "골프", "테니스"],
        gender: "여성",
        filter: ["상의", "롱슬리브"],
        new: false
    },

    {
        id: 4, product: "플리티드 라인드 하이라이즈 테니스 스커트",
        price: 93000,
        color: ["#d8d2b2", "#eaeaec", "#a4999a", "#444144", "#222222", "#e78d85", "#dbb1ad", "#e1b3b9", "#acacac", "#bbdecd"],
        dec: ["Swift™", "테니스"],
        gender: "여성",
        filter: ["하의", "스커트"],
        new: false
    },

    {
        id: 5, product: "인비고레이트 트레이닝 탱크탑",
        price: 93000,
        color: ["#222222", "#9a9977", "#f14655", "#d1d884"],
        dec: ["Everlux™", "고강도", "트레이닝"],
        gender: "여성",
        filter: ["상의", "탱크"],
        new: true
    },

    {
        id: 6, product: "패스트 앤 프리 하이라이즈 쇼츠 6",
        price: 93000,
        color: ["#00213f", "#945443", "#403d41", "#222222", "#a3005e"],
        dec: ["Nulux™", "초경량", "러닝"],
        gender: "여성",
        filter: ["하의", "쇼츠"],
        new: false
    },

    {
        id: 7, product: "모달 실크 요가 탱크탑",
        price: 78000,
        color: ["#eaeaec", "#f59244", "#878450", "#d7d7e7"],
        dec: ["요가"],
        gender: "여성",
        filter: ["상의", "탱크"],
        new: false
    },

    {
        id: 8, product: "라이크 어 클라우드 브라 라이트 서포트",
        price: 93000,
        color: ["#b27db8", "#e68d84", "#e1b3b9", "#eaeaec", "#f69045", "#352b24", "#fc757a", "#9f8967", "#f7eae7", "#d5d4e4"],
        dec: ["요가"],
        gender: "여성",
        filter: ["상의", "스포츠브라"],
        new: true
    },

    {
        id: 9, product: "드라이센스 롱슬리브",
        price: 109000,
        color: ["#222222", "#945443", "#352b24"],
        dec: ["Lycra™", "트레이닝"],
        gender: "남성",
        filter: ["상의", "티셔츠"],
        new: false
    },

    {
        id: 10, product: "프렌치 테리 오버사이즈 롱슬리브 크루",
        price: 159000,
        color: ["#888888", "#9f8967", "#f7eae7"],
        dec: ["코튼 테리", "데일리"],
        gender: "남성",
        filter: ["상의", "후디&스웻셔츠"],
        new: true
    },

    {
        id: 11, product: "헤비웨이트 크레이프 하프집",
        price: 138000,
        color: ["#333333", "#9f8967"],
        dec: ["코튼", "데일리"],
        gender: "남성",
        filter: ["상의", "후디&스웻셔츠"],
        new: false
    },

    {
        id: 12, product: "다운 포 잇 올 베스트",
        price: 138000,
        color: ["#f7eae7", "#333333", "#878450", "#d6d6e5"],
        dec: ["Glyde™", "데일리"],
        gender: "남성",
        filter: ["상의", "아우터"],
        new: true
    },

    {
        id: 13, product: "시티 스웻 풀집 후디",
        price: 159000,
        color: ["#d2c0a1", "#9096bb", "#222222", "#242732", "#dbdbdb"],
        dec: ["프렌치 테리", "데일리"],
        gender: "남성",
        filter: ["상의", "아우터"],
        new: true
    },

    {
        id: 14, product: '라이트웨이트 트레일 러닝 쇼츠 7"',
        price: 138000,
        color: ["#444245", "#a4c58d"],
        dec: ["경량", "러닝"],
        gender: "남성",
        filter: ["하의", "쇼츠"],
        new: true
    },

    {
        id: 15, product: '써지 웜 타이츠 29"',
        price: 184000,
        color: ["#222222", "#f5f5f5", "#444245"],
        dec: ["발수", "방풍", "러닝"],
        gender: "남성",
        filter: ["하의", "타이즈"],
        new: true
    },
    {
        id: 16, product: '룰루레몬랩 플리스 크루 풀오버',
        price: 184000,
        color: ["#a74335", "#393939", "#ded5ca"],
        dec: ["플리스", "기모", "데일리"],
        gender: "남성",
        filter: ["상의", "후디&스웻셔츠"],
        new: true
    },
    {
        id: 17, product: '요가 매트 타월 위드 그립',
        price: 78000,
        color: ["#e78d85", "#8ca9a4"],
        dec: ["요가", "소도구"],
        gender: "액세서리",
        filter: ["요가용품"],
        new: true
    },
    {
        id: 18, product: '카디오 크로스 트레이너 헤드밴드',
        price: 190000,
        color: ["#f9f9f9", "#efe2e0", "#cf9ae3", "#383130"],
        dec: ["헤어밴드", "트레이닝"],
        gender: "액세서리",
        filter: ["헤어 액세서리"],
        new: true
    },
    {
        id: 19, product: '파워 스트라이드 크루 삭스 3팩',
        price: 67000,
        color: ["linear-gradient(180deg, rgba(186,178,212,1) 0%, rgba(227,227,229,1) 35%, rgba(238,155,151,1) 100%)"],
        dec: ["양말", "트레이닝"],
        gender: "액세서리",
        filter: ["양말"],
        new: true
    },
    {
        id: 20, product: '런 포 잇 올 글러브',
        price: 51000,
        color: ["#f24755", "#222222"],
        dec: ["발수", "플리스", "러닝"],
        gender: "액세서리",
        filter: ["장갑"],
        new: true
    },
]

const FOOTDATA = [
    {
        id: 1, title: "PRODUCT", alink: "#!",
        submenu: [
            { sid: 1, stitle: "신제품", slink: "#!" },
            { sid: 2, stitle: "여성", slink: "#!" },
            { sid: 3, stitle: "남성", slink: "#!" },
            { sid: 4, stitle: "액세서리", slink: "#!" },
        ]
    },
    {
        id: 2, title: "MY ACCOUNT", alink: "#!",
        submenu: [
            { sid: 1, stitle: "내 계정", slink: "#!" },
            { sid: 2, stitle: "위시리스트", slink: "#!" },
            { sid: 3, stitle: "주문/배송조회", slink: "#!" },
            { sid: 4, stitle: "취소/반품", slink: "#!" },
        ]
    },
    {
        id: 3, title: "SUPPORT", alink: "#!",
        submenu: [
            { sid: 1, stitle: "고객센터", slink: "#!" },
            { sid: 2, stitle: "수선 안내", slink: "#!" },
            { sid: 4, stitle: "FAQ", slink: "#!" },
            { sid: 5, stitle: "기프트 카드", slink: "#!" },
            { sid: 6, stitle: "이용약관", slink: "#!" },
        ]
    },
    {
        id: 4, title: "ABOUT US", alink: "#!",
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

export { NAVDATA, FILTER, ITMDATA, FOOTDATA };