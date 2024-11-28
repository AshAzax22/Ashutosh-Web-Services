import styles from './input.module.css'
import PropTypes from 'prop-types'

const Input = ({type, value, placeholder, name, labelText, onChange}) => {
  return (
    <div className={styles.inputContainer}>
        <label htmlFor={name} >{labelText}</label>
        <input value={value} type={type} id={name} name={name} placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  labelText: PropTypes.string,
  onChange: PropTypes.func
}

export default Input