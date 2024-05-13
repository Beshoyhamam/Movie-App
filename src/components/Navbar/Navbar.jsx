import Link from "next/link";
import style from "./Navbar.module.css"
import SearchComp from "../SearchComp/SearchComp";

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className="container">
                <div className={style.content}>
                    <div className={style.logo}>
                        <Link href="/">Movie App</Link>
                    </div>

                    <ul className={style.links}>
                        <li>
                            <Link href="/watch-list">Watch List</Link>
                        </li>
                        <li>
                            <Link href="/watched">Watched</Link>
                        </li>
                        <li>
                            <Link href="/search">Search</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;