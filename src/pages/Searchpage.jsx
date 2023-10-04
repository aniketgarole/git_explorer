import styles from "../styles/Searchpage.module.css"

const Searchpage = () => {
  return (
    <div className={styles.form_container}>
        <form>
            <input type="text" placeholder="Enter github username"/>
            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default Searchpage