const NavData = [
    {
        navid: 1, title: "신상품", alink: "#!",
        submenu: [
            { stitle: "컬렉션", slink: "#!s" },
            { stitle: "액티비티", slink: "#!s" },
            { stitle: "상의", slink: "#!s" },
            { stitle: "하의", slink: "#!s" },

        ]
    },
    {
        navid: 2, title: "베스트", alink: "#!",
        submenu: [
            { stitle: "컬렉션", slink: "#!s" },
            { stitle: "액티비티", slink: "#!s" },
            { stitle: "상의", slink: "#!s" },
            { stitle: "하의", slink: "#!s" },

        ]
    },
    {
        navid: 3, title: "여성", alink: "#!",
        submenu: [
            { stitle: "컬렉션", slink: "#!s" },
            { stitle: "액티비티", slink: "#!s" },
            { stitle: "상의", slink: "#!s" },
            { stitle: "하의", slink: "#!s" },

        ]
    },
    {
        navid: 4, title: "남성", alink: "#!",
        submenu: [
            { sid: 1, stitle: "컬렉션", slink: "#!s" },
            { sid: 2, stitle: "액티비티", slink: "#!s" },
            { sid: 3, stitle: "상의", slink: "#!s" },
            { sid: 4, stitle: "하의", slink: "#!s" },

        ]
    },
    {
        navid: 5, title: "액세서리", alink: "#!",
        submenu: [
            { sid: 1, stitle: "가방", slink: "#!s" },
            { sid: 2, stitle: "요가소도구", slink: "#!s" },
            { sid: 3, stitle: "요가 매트", slink: "#!s" },
            { sid: 4, stitle: "장갑", slink: "#!s" },
            { sid: 5, stitle: "헤어 액세서리", slink: "#!s" },
            { sid: 6, stitle: "모자", slink: "#!s" },
            { sid: 7, stitle: "양말", slink: "#!s" },

        ]
    },
]

const Nav = () => {
    return (
        <nav className="Gnb">
            <ul className="mNav">
                {
                    NavData.map(
                        (navlink, idx) => (<li key={navlink.navid}>
                            <a href={navlink.alink}>{navlink.title}</a>
                            <ul className="sNav">
                                {
                                    navlink.submenu.map(
                                        smenu => (<li key={navlink.sid}>{smenu.stitle}</li>)
                                    )
                                }
                            </ul>
                        </li>)
                    )
                }

            </ul>
        </nav>
    )
}

export default Nav;