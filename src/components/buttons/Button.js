import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const Button = ({ children, to }) => {
  return (
    <>
      <Link className={styles.btn} to={to}>
        {children}
      </Link>
    </>
  )
}
export default Button
