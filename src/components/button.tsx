import { ReactNode } from 'react';

type PropsType = {
  children?: ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: PropsType) {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
