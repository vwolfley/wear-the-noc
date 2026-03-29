import Header from "../layout/Header/header";
import FooterSimple from "../layout/Footer/footerSimple";

import MainBanner from "../components/mainBanner";
import MainCTA from "../components/mainCTA";

export default function MainPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col grow m-6 border-double border-4 border-black">
        {/* <div className="border-double border-black p-4"> */}
          <MainBanner />
          <MainCTA />
        {/* </div> */}
      </main>
      <FooterSimple />
    </>
  );
}
