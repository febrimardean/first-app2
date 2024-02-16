import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.author}>
                <h5>Febri Mardean</h5>
            </div>
            <div className={styles.copyright}>
                <h5>Copyright &copy; 2024 - My Agency Team</h5>
            </div>
        </div>
    )
}

export default Footer