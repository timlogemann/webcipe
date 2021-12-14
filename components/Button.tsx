import { ComponentProps } from 'react';

const Button = (props: ComponentProps<'button'>) => {
  return <button {...props} className="block h-16 w-full bg-red-500" />;
};

export default Button;
