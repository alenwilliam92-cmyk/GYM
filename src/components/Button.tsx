import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full min-h-[48px] px-7 transition-all duration-180 select-none text-center cursor-pointer focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";

  const variantStyles = {
    primary:
      "bg-accent text-white hover:bg-accent-hover active:scale-[0.99] shadow-sm",
    secondary:
      "bg-sand text-main hover:bg-[#e4dccf] border border-divider active:scale-[0.99]",
    outline:
      "bg-transparent text-main border border-input-outline/40 hover:border-main hover:bg-sand/30 active:scale-[0.99]",
    ghost:
      "bg-transparent text-main hover:text-accent hover:bg-sand/20 px-4",
  };

  const sizeStyles = {
    sm: "text-xs min-h-[40px] px-5",
    md: "text-sm min-h-[48px] px-7",
    lg: "text-base min-h-[52px] px-8",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
