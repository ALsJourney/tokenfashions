import Image from "next/image";
import Link from "next/link";
import DiscordIcon from "./partials/DiscordIcon";
import TwitterIcon from "./partials/TwitterIcon";
const Socials: React.FC = () => {
  return (
    <>
      <p className="text-md mt-9 animate-fade-in">
        Really excited to get in touch with us?
      </p>

      <div className=" mt-4 flex flex-col items-center md:flex-row">
        <Link
          href="https://twitter.com/tokenfashions"
          className="mb-4 mr-4 flex items-center"
        >
          <TwitterIcon />
          <span className="ml-2">@tokenfashions</span>
        </Link>
        <Link
          href="https://discord.gg/VByEgNUFdN"
          className="mb-4 flex items-center rounded bg-white p-4 text-black"
        >
          <DiscordIcon /> <span className="ml-2">Join our discord today!</span>
        </Link>
      </div>
    </>
  );
};

export default Socials;
