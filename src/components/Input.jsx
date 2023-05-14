// eslint-disable-next-line react/prop-types
function Input({ type, id, placeholder, name, label, onChange }) {
  return (
    <div className='form-floating mb-3'>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className='form-control'
        onChange={onChange}
      />
      <label htmlFor='email'>{label}</label>
    </div>
  );
}

export default Input;
