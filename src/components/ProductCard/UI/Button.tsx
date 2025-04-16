import { IProps } from "../../../interfaces/interfaces";

const Button = ({ className, children, width, ...rest }: IProps) => {
  return (
    <button
      className={`${className} p-4 text-white rounded-2xl cursor-pointer ${width}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
