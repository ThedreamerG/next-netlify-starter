import styles from './Header.module.css'

export default function Footer() {
  return (
    <>
      <header className={styles.footer}> 
        <a>Accueil</a>
        <a>Projets</a>
        <a>CV</a>
        <a>Contact</a>
      </header>
    </>
  )
}