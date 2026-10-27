function Input({ type, icon: Icon, placeholder, value, onChange }) {
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
      </div>
    </div>
  );
}

export default Input;
