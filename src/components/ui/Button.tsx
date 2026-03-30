import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      {
        "bg-brand-dark text-white hover:bg-brand-dark/90": variant === "primary",
        "bg-brand-gold text-white hover:bg-brand-gold-dark": variant === "secondary",
        "border border-brand-dark bg-transparent hover:bg-brand-dark hover:text-white": variant === "outline",
        "h-10 px-4 py-2": size === "default",
        "h-12 rounded-md px-8 text-base": size === "lg",
      },
      className
    );

    if (asChild && React.isValidElement(children)) {
      const childProps = children.props as any;
      return React.cloneElement(children, {
        className: cn(classes, childProps.className),
        ref: ref as any,
        ...props,
        onClick: (e: any) => {
          if (childProps.onClick) childProps.onClick(e);
          if (props.onClick) props.onClick(e);
        }
      } as any);
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
