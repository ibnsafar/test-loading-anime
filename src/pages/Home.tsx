import {FC, useState} from "react";
import {useQuery} from "@apollo/client";
import {query} from "../gql/Query";
import {connect} from "react-redux";
import "./css/home.css";

const Home: FC = (resData: any) => {
    const [search, setSearch] = useState<string>("shi");
    // const [loading, error, data]: any = useQuery(getTest);
    // const data: any = useQuery(query).data;
    // console.log(resData)
    const animeList = resData.animeList;
    const favAnime = resData.favAnime;
    console.log(resData)

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
                        <div className="b-content-container">
                            {animeList.length > 0 ? animeList.map((item: any, index: number) => {
                                return <div key={index} className={"b-card"}>
                                    <img className={"card-img"}
                                         src={require("./../assets/girl.png")} alt="img"/>
                                    <p className={"card-name"}>{item.name}</p>
                                    <p className={"card-j"}>{item.japanese}</p>
                                    <img
                                        className={"card-fav"}
                                        // onClick={() => favouriteAnime.push(content[item])}
                                        src={require("./../assets/fav.png")
                                        } alt="fav"/>
                                </div>
                            }) : <p>no media</p>}
                        </div>
                        <button className={"b-more"}>MORE <img
                            src={require("./../assets/more.png")} alt=""/></button>
                    </div>
                    {favAnime.length > 0 &&
                        <div className={"b-fav"}>
                            <h1 className={"b-fav-title"}>Любимое аниме</h1>
                            <div className="b-fav-container">
                                {favAnime.length > 0 && favAnime.map((item: any, index: number) => {
                                    return <div key={index} className={"fav-card"}>
                                        <img className={"f-c-img"}
                                             src={require("./../assets/fav-girl.png")} alt=""/>
                                        <div className={"f-c-right"}>
                                            <p className={"f-c-n"}>{item.name}</p>
                                            <img className={"f-c-l"}
                                                 src={require("./../assets/closing.png")} alt=""/>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default connect((state: any) => {
    return {
        animeList: state.animeReducer.animeList,
        favAnime: state.animeReducer.favAnime
    }
}, {})(Home);
