import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        {...props}
        className="bg-white/10 px-4 py-2 rounded-lg border border-white/[0.1] transition-colors flex items-center gap-2 hover:border-white/20 text-sm"
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;
