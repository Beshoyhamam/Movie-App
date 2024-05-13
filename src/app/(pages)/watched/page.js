"use client"
/* eslint-disable @next/next/no-img-element */
import { useMovieContext } from "@/components/Context/GlobalContext";
import style from "./watched.module.css"
import * as actions from "../../../components/Context/ActionTypes"

import { IoClose } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";


const Watched = () => {
    const MovieContext = useMovieContext()
    return (
        <div className={style.watched}>
            <div className="container">
            <div className={style.mainHeading}>
                    <h1>Watched</h1>
                    <span>{MovieContext.watched.length} Movies</span>
                </div>

                {MovieContext.watched.length > 0 || null ? 
                    (
                        <div className={style.movieGrid}>
                            {MovieContext.watched.map(item => (
                                <div className={style.movie} key={item.imdbID} type="watched">
                                    <img src={item.Poster} alt={item.Title} />

                                    <div className={style.btn}>
                                        <FaEyeSlash onClick={() => MovieContext.MoviesDispatch(
                                            {
                                                type: actions.MOVE_TO_WATCHLIST,
                                                payload: item
                                            }
                                        )} />

                                        <IoClose onClick={() => MovieContext.MoviesDispatch(
                                            {
                                                type: actions.REMOVE_MOVIE_FROM_WATCHED,
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

export default Watched;