import { Eye, EyeOff } from "lucide-react";

function Input({
  type,
  icon: Icon,
  placeholder,
  value,
  onChange,
  passwordField = false,
  handleShowPassword,
  showPassword,
}) {
  return (
    <div className="form-control  w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="size-5 text-base-content/40" />
        </div>
        <input
          type={type}
          className={`input input-bordered w-full pl-10`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {passwordField === true && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={handleShowPassword}
          >
            {showPassword ? (
              <Eye className="size-5 text-base-content/40" />
            ) : (
              <EyeOff className="size-5 text-base-content/40" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default Input;
