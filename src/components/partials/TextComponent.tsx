import Link from "next/link";
import Socials from "../Socials";

const TextComponent = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center md:items-start md:text-left">
      <h1 className="pb-16 text-4xl md:text-6xl">
        <span className="text-red-800">Tired</span> of dealing with suppliers?
        😤{" "}
      </h1>
      <p className="animate-fade-in text-2xl">
        <span> 🚀 List your NFT merch </span> on Amazon and enjoy affordable
        quality, effortless listing, and unmatched ease. <br /> <br /> ❤️ Let us
        take care of your merch while you focus on building on Web3!
      </p>
      <Link href="/buy">
        <button className="group relative mb-8  mt-8 h-12 w-80 overflow-hidden rounded-lg bg-white text-lg shadow md:w-96">
          <div className="absolute inset-0 w-3 bg-yellow transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-center text-black group-hover:text-gray-700">
            List your Merch on Amazon today ❤️
          </span>
        </button>
      </Link>
      <Socials />
    </div>
  );
};

export default TextComponent;
