import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const postCard = () => {
  return (
    <div className={styles.container}>
        <div className="styles.top">
            <div className={styles.imgContainer}>
                <Image src="/img/photo1.jpg" alt="" fill className={styles.img}/>
            </div>
            <span class={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vel inventore magnam molestias nostrum doloribus voluptas magni tempore quo, ex id ipsum harum deleniti. Nulla, sit accusamus! Ducimus, pariatur laborum!  </p>
            <Link href="/blog/post">READ MORE</Link>
        </div>
    </div>
  )
}

export default postCard