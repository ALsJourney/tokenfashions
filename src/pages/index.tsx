import { type NextPage } from "next";
import HeaderComponent from "~/components/HeaderComponent";
import dynamic from "next/dynamic";
import MainContent from "~/components/MainContent";
import { Canvas } from "@react-three/fiber";

const Home: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <MainContent />
    </>
  );
};

export default Home;
