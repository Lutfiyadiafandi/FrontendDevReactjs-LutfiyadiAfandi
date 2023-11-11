import { Link } from "react-router-dom";

type ButtonLinkProps = {
  children: string;
  to: string;
};
const ButtonLink = ({ children, to }: ButtonLinkProps) => {
  return (
    <Link
      to={to}
      className="w-full flex justify-center items-center py-2 rounded-sm bg-sky-950 text-base font-normal text-white uppercase hover:bg-opacity-80"
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
