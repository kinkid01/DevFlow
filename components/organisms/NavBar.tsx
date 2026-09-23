import Image from "next/image";
import Link from "next/link";


const NavBar = () => {
  return (
    <header>
      <nav>
        <Link href={"/"} className="logo">
          <Image
            src={"/icons/devFlow.png"}
            alt="logo"
            width={26}
            height={26}
            className="rounded-md"
          />
          <p>DevFlow</p>
        </Link>

        <ul>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Events</Link>
          <Link href={"/"}>Create Event</Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
