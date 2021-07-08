import styles from './card.module.css'

const card = (props) => {
    return (
        <>
          <div className={styles.card}>
            <div className={styles.box}>
              <i className={`fa fa-${props.icon}`}></i>
                <div className={styles.text}>{props.title}</div>
                  <p>{props.text}</p>
            </div>
          </div>
        </>
    )
}

export default card
