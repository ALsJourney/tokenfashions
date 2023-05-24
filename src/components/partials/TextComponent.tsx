import Link from "next/link";
import { Html } from "@react-three/drei";
const TextComponent = () => {
  return (
    <>
      <p className="w-full">
        List your NFTs on Amazon and enjoy affordable quality, effortless
        listing, and unmatched ease. <br /> <br /> Let us take care of your
        merch while you focus on building on Web3!
      </p>
      <Link href="/customers">
        <div className="mt-4 flex border border-2 border-white p-4">
          <button>See who we worked with ➡️ </button>
        </div>
      </Link>
    </>
  );
};

export default TextComponent;
