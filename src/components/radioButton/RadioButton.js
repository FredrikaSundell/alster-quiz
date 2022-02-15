const RadioButton = ({ label, value, onChange, name, checked }) => {
  return (
    <label>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  )
}

export default RadioButton
