import { NextPage } from "next";
import { HelioPay } from "@heliofi/react";
import { Canvas } from "@react-three/fiber";
import DogeShirt from "~/components/partials/DogeShirt";
import DropZone from "~/components/partials/DropZone";

const buy: NextPage = () => {
  return (
    <div className="flex h-full flex-col overflow-y-auto px-8 md:flex-row">
      <div className="flex-1">
        <Canvas
          flat
          camera={{
            fov: 35,
            near: 0.1,
            far: 200,
            position: [1, 2, 45],
          }}
        >
          <DogeShirt />
        </Canvas>
      </div>
      <div className="flex-1 ">
        <div className="flex h-full flex-col items-center justify-center text-center md:items-start md:text-left">
          <DropZone />
          <HelioPay
            cluster="mainnet-beta"
            payButtonTitle="List your NFT merch on Amazon"
            paymentRequestId="647451146434164c58a17d8d"
            theme={{
              colors: {
                primary: "#F76C1B",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default buy;
