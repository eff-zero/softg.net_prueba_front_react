// eslint-disable-next-line react/prop-types
function Input({ type, id, placeholder, name, label, onChange, error }) {
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
      {error && <p className='ms-2 text-danger fw-medium'>{error[name]}</p>}
    </div>
  );
}

export default Input;
