import Link from "next/link";
import Socials from "../Socials";

const TextComponent = () => {
  return (
    <div className="flex h-full flex-col justify-center">
      <h1 className="pb-16  text-4xl md:text-6xl">
        <span className="text-red-800">Tired</span> of dealing with suppliers?
        😤{" "}
      </h1>
      <p className="animate-fade-in text-2xl">
        <span> 🚀 List your NFTs </span> on Amazon and enjoy affordable quality,
        effortless listing, and unmatched ease. <br /> <br /> ❤️ Let us take
        care of your merch while you focus on building on Web3!
      </p>
      <Link href="/customers">
        <button class="group relative mb-8  mt-8 h-12 w-64 overflow-hidden rounded-lg bg-white text-lg shadow">
          <div class="absolute inset-0 w-3 bg-yellow transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span class="relative text-black group-hover:text-gray-700">
            See who we worked with! ➡️
          </span>
        </button>
      </Link>

      <Socials />
    </div>
  );
};

export default TextComponent;
