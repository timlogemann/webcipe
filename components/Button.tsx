import { ComponentProps } from 'react';

const Button = (props: ComponentProps<'button'>) => {
  return <button {...props} className="bg-red-500" />;
};
