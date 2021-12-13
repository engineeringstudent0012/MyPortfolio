import {useEffect, useState} from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portoflio.scss"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
} from "../../data"

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "Programming Projects",
        },
        {
            id: "Other",
            title: "Other Projects",
        },
    ]


    //Maps the selected with the data
    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio)
                break
            case "Other":
                setData(webPortfolio)
                break
        }
    }, [selected])

    function handleClick (url, url1,muntiple=false) {
        window.open(url)

        if (muntiple === true) {
            window.open(url1)
        }
    }
    return (
        <div className="portfolio" id="portfolio">
            <h1> Portfolio</h1>
            <p>Some Recent Projects </p>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (

                    <div className="item" onClick={() => handleClick(d.url, d.url1, d.muntiple)}>
                        <img
                            src={d.img}
                            alt=""
                        />
                        <h3>{d.title}</h3>

                    </div>

                ))}

            </div>
            <div className="portfolioFooter">
                <h1>Built With </h1>
                <img src="assets/htmlcss.png" alt=""/>
                <img src="assets/javascript.png" alt=""/>
                <img src="assets/react.png" alt=""/>
                <img src="assets/python.png" alt=""/>
                <img src="assets/wordpress.png" alt=""/>
            </div>

        </div>
    )
}