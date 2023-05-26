import { type NextPage } from "next";
import HeaderComponent from "~/components/HeaderComponent";
import MainContent from "~/components/MainContent";

const Home: NextPage = () => {
  return (
    <>
      <div className="md:hidden">
        <HeaderComponent />
      </div>
      <MainContent />
    </>
  );
};

export default Home;
