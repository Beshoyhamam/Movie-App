import SearchComp from "@/components/SearchComp/SearchComp";
import style from "./Search.module.css"

const Search = () => {
    return (
        <div className={style.search}>
            <div className="container">
                <SearchComp />
            </div>
        </div>

        
        
    );
}

export default Search;