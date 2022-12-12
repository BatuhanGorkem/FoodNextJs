import Link from "next/link";
const NavLink = (props) => {
  const { name, link } = props;

  return (
    <div className="">
      <Link
        href={link}
        className="hover:text-red-500  transition-all font-semibold relative before:content-[''] before:absolute before:block before:w-full before:h-[3px] 
        before:bottom-0 before:left-0 before:bg-red-500 before:top-[100%]
        before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
        before:transition before:ease-in-out before:duration-300 "
      >
        {name}
      </Link>
    </div>
  );
};

export default NavLink;
