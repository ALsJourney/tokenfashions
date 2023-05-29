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

      <div className=" mt-4 flex w-full flex-col items-center md:flex-row">
        <Link
          href="https://twitter.com/tokenfashions"
          className="mb-4 mr-32 flex items-center"
          passHref
        >
          <TwitterIcon />
          <span className="ml-2">@tokenfashions</span>
        </Link>
        <Link
          href="https://discord.gg/VByEgNUFdN"
          className="mb-4 flex items-center"
          passHref
        >
          <button className="group relative mt-4 h-12 w-64 overflow-hidden rounded-2xl bg-white text-black shadow md:mt-0">
            <div className="absolute inset-0 z-0 w-3 bg-purple-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <div className="relative z-10 flex items-center px-6">
              <DiscordIcon className="group-hover:fill-white" />
              <span className="ml-2 group-hover:text-white">
                Join our discord today!
              </span>
            </div>
          </button>
        </Link>
      </div>
      <Link href="/customers">
        <button className="group relative mb-8  mt-8 h-12 w-80 overflow-hidden rounded-lg bg-white text-lg shadow md:w-96">
          <div className="absolute inset-0 w-3 bg-yellow transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-center text-black group-hover:text-gray-700">
            See who we worked with! ➡️
          </span>
        </button>
      </Link>
    </>
  );
};

export default Socials;
