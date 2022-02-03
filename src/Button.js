import styles from './Button.module.scss'

const Button = () => {
  return (
    <>
      <button
        className={styles.btn}
        onClick={() => alert('I am styled with CSS Modules')}
      >
        I am button - Press Me
      </button>
    </>
  )
}
export default Button
