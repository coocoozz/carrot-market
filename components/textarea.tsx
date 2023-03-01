interface TextAreaProps {
  label?: string;
  name?: string;
  [key: string]: any;
}

function TextArea({ label, name, ...rest }: TextAreaProps) {
  return (
    <div>
      {label ? (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700 mb-1 block"
        >
          {label}
        </label>
      ) : null}

      <div>
        <textarea
          id={name}
          className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
          rows={4}
          {...rest}
        />
      </div>
    </div>
  );
}

export default TextArea;
