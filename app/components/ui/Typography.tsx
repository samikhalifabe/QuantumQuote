import { ReactNode } from 'react';
import { useDesignTokens } from '@/app/hooks/useDesignTokens';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const H1 = ({ children, className, as: Component = 'h1' }: TypographyProps) => {
  const { classes } = useDesignTokens();
  return (
    <Component className={cn(classes.text.h1, className)}>
      {children}
    </Component>
  );
};

export const H2 = ({ children, className, as: Component = 'h2' }: TypographyProps) => {
  const { classes } = useDesignTokens();
  return (
    <Component className={cn(classes.text.h2, className)}>
      {children}
    </Component>
  );
};

export const H3 = ({ children, className, as: Component = 'h3' }: TypographyProps) => {
  const { classes } = useDesignTokens();
  return (
    <Component className={cn(classes.text.h3, className)}>
      {children}
    </Component>
  );
};

export const Body = ({ children, className, as: Component = 'p' }: TypographyProps) => {
  const { classes } = useDesignTokens();
  return (
    <Component className={cn(classes.text.body, className)}>
      {children}
    </Component>
  );
};

export const BodyLarge = ({ children, className, as: Component = 'p' }: TypographyProps) => {
  const { classes } = useDesignTokens();
  return (
    <Component className={cn(classes.text.bodyLarge, className)}>
      {children}
    </Component>
  );
};

export const BodySmall = ({ children, className, as: Component = 'p' }: TypographyProps) => {
  const { classes } = useDesignTokens();
  return (
    <Component className={cn(classes.text.bodySmall, className)}>
      {children}
    </Component>
  );
};

export const Caption = ({ children, className, as: Component = 'span' }: TypographyProps) => {
  const { classes } = useDesignTokens();
  return (
    <Component className={cn(classes.text.caption, className)}>
      {children}
    </Component>
  );
};

export const Label = ({ children, className, as: Component = 'label' }: TypographyProps) => {
  const { classes } = useDesignTokens();
  return (
    <Component className={cn(classes.text.label, className)}>
      {children}
    </Component>
  );
};