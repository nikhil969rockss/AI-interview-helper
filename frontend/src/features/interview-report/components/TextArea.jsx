function TextArea({ placeholder, value, onChange, name, className }) {
  return (
    <textarea
      className={`resize-none bg-gray-800 border-none outline-none p-3 rounded-md w-full scrollbar-none h-full ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      rows={5}
    ></textarea>
  );
}

export default TextArea;
