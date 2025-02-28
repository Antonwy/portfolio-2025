import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

function Section({ children, className, id }: Props) {
  return (
    <section
      id={id}
      className={cn(
        'min-h-[100vh] flex flex-col items-center justify-center',
        className
      )}
    >
      {children}
    </section>
  );
}

export default Section;
