"use client"
/* eslint-disable @next/next/no-img-element */
import { useMovieContext } from "@/components/Context/GlobalContext";
import style from "./watchList.module.css"
import * as actions from "../../../components/Context/ActionTypes"

import { IoClose } from "react-icons/io5";
import { FaEye } from "react-icons/fa";


const WatchList = () => {
    const MovieContext = useMovieContext()

    return (
        <div className={style.watchList}>
            <div className="container">
                <div className={style.mainHeading}>
                    <h1>My Watch List</h1>
                    <span>{MovieContext.watchlist.length} Movies</span>
                </div>

                {MovieContext.watchlist.length > 0 || null ?
                    (
                        <div className={style.movieGrid}>
                            {MovieContext.watchlist.map(item => (
                                <div className={style.movie} key={item.imdbID} type="watchlist">
                                    <img src={item.Poster} alt={item.Title} />

                                    <div className={style.btn}>
                                        <FaEye onClick={() => MovieContext.MoviesDispatch(
                                            {
                                                type: actions.ADD_MOVIE_TO_WATCHED,
                                                payload: item
                                            }
                                        )}  />

                                        <IoClose onClick={() => MovieContext.MoviesDispatch(
                                            {
                                                type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                                                payload: item.imdbID
                                            }
                                        )} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                    :
                    <h2 className={style.noMovies}>No Movies in your list, add some !</h2>
                }
            </div>
        </div>
        
    );
}

export default WatchList;