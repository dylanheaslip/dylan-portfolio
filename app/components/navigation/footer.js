import styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.spinner}>
        <img src="../brand-circle-text-v1.png" alt='designer developer spinning logo' />
      </div>
      <div><small>&copy; 2023 Dylan</small></div>
    </div>
  )
}

export default Footer