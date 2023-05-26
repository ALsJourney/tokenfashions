import Image from "next/image";
import Link from "next/link";

import logo from "./../../public/images/logo.png";

const HeaderComponent: React.FC = () => {
  return (
    <header className="container mx-auto mt-8 flex justify-center px-6 md:justify-start">
      <Link href="/">
        <Image src={logo} width={100} height={100} alt={"Tokenfashions Logo"} />
      </Link>
    </header>
  );
};

export default HeaderComponent;
