import { cn } from '@/lib/utils';
import { InputHTMLAttributes } from 'react';

function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        'p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 transition-colors text-sm',
        className
      )}
      {...props}
    />
  );
}

export default Input;
