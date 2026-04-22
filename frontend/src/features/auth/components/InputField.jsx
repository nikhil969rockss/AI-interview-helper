import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

const InputField = ({
  label,
  type,
  placeholder,
  iconLeft,
  onTogglePassword,
  value,
  onChange,
  className,
  showPassword,
  ...props
}) => {
  return (
    <div>
      <label className="text-xs text-slate-400">{label}</label>
      <div className="r relative flex items-center gap-4">
        {iconLeft && (
          <span className="absolute top-6 left-4 text-xl text-slate-600">
            {iconLeft}
          </span>
        )}
        <input
          type={type || "text"}
          value={value}
          onChange={onChange}
          placeholder={placeholder || `Enter your ${label}`}
          className={`bg-surface-dim mt-2 w-full rounded-lg border border-white/10 px-4 py-3 pl-10.5 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-violet-500 focus:outline-none ${className}`}
          {...props}
        />
        {label === "PASSWORD" && (
          <button
            type="button"
            className="absolute top-6 right-3 cursor-pointer"
            onClick={onTogglePassword}
          >
            {showPassword ? (
              <GoEyeClosed size={20} className="text-slate-600" />
            ) : (
              <GoEye size={20} className="text-slate-600" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
