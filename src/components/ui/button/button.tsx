import styles from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
	asChild?: boolean
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  className,
	asChild = false,
  ...props
}) => {
  const buttonClassName = `${styles.button} ${styles[variant]} ${
    styles[size]
  } ${className || ''}`;

  return (
    <button
      className={buttonClassName}
      {...props}
      disabled={isLoading || props.disabled}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
