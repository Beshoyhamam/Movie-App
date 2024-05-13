/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from "react";
import style from "./SearchComp.module.css"
import { useMovieContext } from "../Context/GlobalContext";
import * as actions from "../Context/ActionTypes"


const SearchComp = () => {
    const [searchValue, setSearchValue] = useState("")
    const [allMovies, setAllMovies] = useState([])
    const MovieContext = useMovieContext();

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=1b9dcc20`)
            .then(res => res.json())
            .then((data) => {
                if (data.Search) {
                    setAllMovies(data.Search)
                }
            }).catch((error) => console.log(error))
    }, [searchValue])

    return (
        <div className={style.searchComp}>
            <div className={style.serachBox}>
                <input
                    type="text"
                    placeholder="Search For A Movie"
                    className={style.inputSearch}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>

            <div className={style.searchResult}>
                {allMovies.length > 0 && searchValue.length > 0 ?
                    <div className={style.movies}>
                        {allMovies.map(item => (
                            <div key={item.imdbID}>
                                <div className="posterMovie">
                                    <img
                                        src={item.Poster}
                                        alt={item.Title}
                                    />
                                </div>

                                <div className={style.content}>
                                    <h4>{item.Title}</h4>
                                    <p>{item.Year}</p>
                                </div>

                                <div className={style.btn}>
                                    <button onClick={() => MovieContext.MoviesDispatch(
                                        {
                                            type: actions.ADD_MOVIE_TO_WATCHLIST,
                                            payload: item
                                        }
                                    )}
                                        disabled={MovieContext.watchlist.find((mo) => mo.imdbID === item.imdbID) ? true : 
                                            MovieContext.watched.find((mo) => mo.imdbID === item.imdbID) ? true : false
                                        }
                                    >
                                        Add To Watchlist
                                    </button>

                                    <button onClick={() => MovieContext.MoviesDispatch(
                                        {
                                            type: actions.ADD_MOVIE_TO_WATCHED,
                                            payload: item
                                        }
                                    )}
                                        disabled={MovieContext.watched.find((mo) => mo.imdbID === item.imdbID) ? true : false}
                                    >
                                        Add to Watched
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div> : []
                }
            </div>
        </div>
    );
}

export default SearchComp;