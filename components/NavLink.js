import Link from "next/link";
const NavLink = (props) => {
  const { name, link } = props;
  return (
    <Link href={link} className="hover:text-red-500 transition-all">
      {name}
    </Link>
  );
};

export default NavLink;
