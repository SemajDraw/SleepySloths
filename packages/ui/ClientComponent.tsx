import { useEffect, useState } from 'react';

interface Props {
  children?: React.ReactNode;
  component?: React.ReactNode;
}

export const ClientComponent = ({ children, component }: Props) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{component || children}</>;
};
