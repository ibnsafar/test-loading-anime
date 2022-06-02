import {FC, useState} from "react";
import "./css/home.css";

const Home: FC = () => {
    const [search, setSearch] = useState<string>("");
    let favouriteAnime = [];
    let content = [
        {
            img: "",
            name: "Shiguang Dailiren",
            japanese: "时光代理人"
        },
        {
            img: "",
            name: "Shiguang Dailiren",
            japanese: "时光代理人"
        },
        {
            img: "",
            name: "Shiguang Dailiren",
            japanese: "时光代理人"
        },
        {
            img: "",
            name: "Shiguang Dailiren",
            japanese: "时光代理人"
        },
        {
            img: "",
            name: "Shiguang Dailiren",
            japanese: "时光代理人"
        },
        {
            img: "",
            name: "Shiguang Dailiren",
            japanese: "时光代理人"
        },
    ];
    return (
        <div className={"wrapper"}>
            {/*header*/}
            <div className="header">
                <img src={require("./../assets/logo/img.png")} alt="logo"/>
            </div>
            {/*body*/}
            <div className="body-wrapper">
                <div className="body">
                    {/*main part*/}
                    <div className="b-main">
                        <h1 className={"b-title"}>Список аниме</h1>
                        <input
                            className={"b-input"}
                            placeholder={" Text here"}
                            value={search}
                            onChange={(e: any) => setSearch(e.target.value)}
                            type="text"/>
                        {search.length > 0 &&
                            <img src={require("./../assets/closing.png")}
                                 className={"b-x"}
                                 onClick={() => setSearch("")}
                                 alt="closing"/>
                        }
                    </div>
                    {/*    content*/}
                    <div className="b-content">
                        {content.length > 0 ? content.map((item: any, index: number) => {
                            return <div key={index} className={"b-card"}>
                                <img className={"card-img"}
                                    src="" alt="img"/>
                                <p className={"card-"}>{item.name}</p>
                                <p>{item.japanese}</p>
                                <img
                                    onClick={() => favouriteAnime.push(item)}
                                    src={require("./../assets/fav.png")
                                    } alt="fav"/>
                            </div>
                        }) : <p>loading</p>}
                    </div>
                    {/*    favourite anime*/}
                    {favouriteAnime.length > 0 &&
                        <div className={"b-fav"}>
                            <h1>favourite</h1>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default Home;