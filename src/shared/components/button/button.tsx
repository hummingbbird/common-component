import type { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonSizes, buttonVariants } from "./button.css";
import type { ButtonVariantType, ButtonSizeType } from "./button.css";

interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
  children: ReactNode;
}

const Button = ({
  children,
  disabled = false,
  variant = "primary",
  size = "md",
  ...props
}: ButtonComponentProps) => {
  return (
    <button
      className={`${buttonVariants[variant]} ${buttonSizes[size]}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
