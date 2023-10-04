import Repolistcard from "../components/Repolistcard"
import styles from "../styles/Repolist.module.css"

const Repolist = () => {
  return (
    <div className={styles.repolist_container}>
        <h2>Repositories List</h2>
        <Repolistcard/>
        <Repolistcard/>
        <Repolistcard/>
        <Repolistcard/>
        <Repolistcard/>
        <Repolistcard/>
        <Repolistcard/>
        <Repolistcard/>
    </div>
  )
}

export default Repolist