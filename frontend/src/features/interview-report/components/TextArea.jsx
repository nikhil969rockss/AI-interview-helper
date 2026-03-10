function TextArea({ placeholder, value, onChange, name, className }) {
  return (
    <textarea
      className={`scrollbar-none h-full w-full resize-none rounded-md border-none bg-gray-800 p-3 outline-none ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      rows={5}
    ></textarea>
  );
}

export default TextArea;
