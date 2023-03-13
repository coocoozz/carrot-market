import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  kind?: "text" | "phone" | "price";
  type: string;
  register: UseFormRegisterReturn;
}

function Input({ label, name, kind = "text", type, register }: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      {kind === "text" ? (
        <div className="rounded-md relative flex  items-center shadow-sm">
          <input
            id={name}
            type={type}
            {...register}
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      ) : null}

      {kind === "price" ? (
        <div className="rounded-md shadow-sm relative flex items-center">
          <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            id={name}
            type={type}
            {...register}
            className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            placeholder="0.00"
          />
          <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 text-sm">KRW</span>
          </div>
        </div>
      ) : null}

      {kind === "phone" ? (
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-md border rounded-r-none border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
            +82
          </span>
          <input
            id={name}
            type={type}
            {...register}
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-l-none rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      ) : null}
    </div>
  );
}

export default Input;
