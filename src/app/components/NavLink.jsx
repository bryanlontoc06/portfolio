// import Link from "next/link";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const NavLink = ({ href, title }) => {
  let Link = Scroll.Link;
  return (
    <Link
      // href={href}
      to={href}
      smooth={true}
      style={{cursor: 'pointer'}}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
