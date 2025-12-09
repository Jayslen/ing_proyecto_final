import type { InputProps } from "../types/core";

export function Input(props: InputProps) {
  return (
    <label>
      {props.label}
      <input
        {...props}
        className="w-full p-2 mb-2 border border-gray-300 rounded hover:border-blue-500 focus:border-blue-500"
      />
    </label>
  );
}
