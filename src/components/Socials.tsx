import Image from "next/image";
import Link from "next/link";
import twitter from "./../../public/images/twitter.svg";
import discord from "./../../public/images/discord.svg";

const Socials: React.FC = () => {
  return (
    <>
      <p className="text-md mt-9 animate-fade-in">
        Really excited to get in touch with us?
      </p>

      <div className="mt-4 flex items-center">
        <Link
          href="https://twitter.com/tokenfashions"
          className="mr-4 flex items-center"
        >
          <Image
            src={twitter}
            alt="Link to twitter icon"
            width={20}
            height={20}
          ></Image>
          <span className="ml-2">@tokenfashions</span>
        </Link>
        <Link
          href="https://discord.gg/VByEgNUFdN"
          className="flex items-center"
        >
          <Image
            src={discord}
            alt="Link to discord icon"
            width={20}
            height={20}
          ></Image>
          <span className="ml-2">Join our discord today!</span>
        </Link>
      </div>
    </>
  );
};

export default Socials;
