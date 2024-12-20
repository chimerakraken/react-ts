export type CardProps = {
  title: string;
  description: string;
};

/**
 * Card component
 * @param {CardProps} props - Card props
 * @returns {JSX.Element} - Card component
 */
export const Card = ({ title, description }: CardProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
