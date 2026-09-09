import { classNames } from '../../utils/classNames';

function Container({ as: Component = 'div', className, children, ...props }) {
  return (
    <Component
      className={classNames('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Container;
