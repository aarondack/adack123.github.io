import Responsive from 'react-responsive';

export const Desktop = ({ children }) => <Responsive minWidth={992} children={children} />;
export const Tablet = ({ children }) => (
  <Responsive minWidth={767} maxWidth={992} children={children} />
);
export const Mobile = ({ children }) => <Responsive maxWidth={767} children={children} />;
