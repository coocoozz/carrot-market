import { cls } from "@libs/client/utils";

interface ButtonProps {
  large?: boolean;
  text: string;
  [key: string]: any;
}

function Button({ large = false, onClick, text, ...rest }: ButtonProps) {
  return (
    <button
      className={cls(
        "w-full bg-orange-500 hover:bg-orange-600 text-white px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none",
        large ? "py-3 text-base" : "py-2 text-sm"
      )}
    >
      {text}
    </button>
  );
}

export default Button;
