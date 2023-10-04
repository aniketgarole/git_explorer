import styles from "../styles/Repolistcard.module.css"

const Repolistcard = () => {
  return (
    <div className={styles.repocardlist_container}>
        <span>Repository name: Aniket Garole</span>
        <span>Owner/Author: Aniket Garole</span>
        <span>Stars: 5</span>
        <span>Language: JavaScript</span>
    </div>
  )
}

export default Repolistcard