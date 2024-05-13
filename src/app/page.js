/* eslint-disable @next/next/no-img-element */
import styles from './page.module.css'
import poster from "../../public/poster-page.jpg"
import Image from 'next/image'

export default async function Home() {

    return (
        <div className={styles.moviePage}>
            <div className="container">
                <h1 className={styles.title}>Welcome To My Movie App</h1>
                <div className={styles.header}>
                    <Image src={poster} alt='Poster'/>
                </div>
            </div>
        </div>
    )
}
