import styles from './porcentage.module.css'
const porcentage = (props) => {
  return (
    <>
      <div className={styles.bars}>
        <div className={styles.info}>
          <span>{props.title}</span>
          <span>{props.number}</span>
        </div>
          <div className={`${styles.line} ${styles[`porcentage${props.number}`]}`}></div>
      </div>  
    </>
    )
}

export default porcentage
