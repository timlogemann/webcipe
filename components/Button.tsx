import { ComponentProps } from 'react';

const Button = (props: ComponentProps<'button'>) => {
  return <button {...props} className="block p-4 bg-red-500" />;
};

export default Button;
