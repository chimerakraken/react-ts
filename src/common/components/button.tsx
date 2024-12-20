export type ButtonProps = {
  label: string;
};

/**
 * Button component
 * @param {ButtonProps} props - Button props
 * @returns {JSX.Element} - Button component
 */
export const Button = ({ label }: ButtonProps) => {
  return <button>{label}</button>;
};
