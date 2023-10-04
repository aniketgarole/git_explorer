import styles from "../styles/Repodetailpage.module.css"

const Repodetailpage = () => {
  return (
    <div className={styles.repodetailpage_container}>
        <h2>Repository Details</h2>
        <span>Repository Name:</span>
        <span>Repository Description:</span>
        <span>Owner/Author:</span>
        <span>Stars:</span>
        <span>Forks:</span>
        <span>Last Updated:</span>
        <span>License:</span>
        <span>Readme:</span>
        <span>Contributors:</span>
        <span>Issues:</span>
        <span>Pull Requests:</span>
    </div>
  )
}

export default Repodetailpage



