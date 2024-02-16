import Link from "next/link"
import Image from "next/image"
import styles from "./not-found.module.css"

const NotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2>Not Found</h2>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Link href="/">Return Home</Link>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/not-found.png" alt="not-found" fill className={styles.img}/>
            </div>
        </div>
    )
}

export default NotFound

