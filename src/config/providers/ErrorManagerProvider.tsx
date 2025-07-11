
import { ReactNode } from 'react';

export default function ErrorManagerProvider({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}
