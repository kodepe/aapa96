export const Container = ({
  children,
}: {
  children?: React.ReactNode | undefined;
}) => {
  return <div className="container">{children}</div>;
};
