import Image from "next/image";
import MainHeader from "../components/main-header";
import FormSection from "../components/form-section";
import Background1 from "../components/background1";
import Footer from "../components/footer";

const LOGIN = () => {
  return (
    <div className="w-full relative bg-gray-100 h-[1682.6px] overflow-hidden">
      <MainHeader />
      <div className="absolute top-[84.6px] left-[0px] bg-gray-100 border-gray-400 border-b-[1.5px] border-solid box-border w-[1440px] h-[698px] flex flex-col items-center justify-center">
        <Image
          className="self-stretch relative max-w-full overflow-hidden h-[698px] shrink-0 object-cover"
          width={1440}
          height={698}
          alt=""
          src="/content@2x.png"
        />
      </div>
      <FormSection />
      <footer className="absolute top-[1269px] left-[0px] w-[1440px] h-[414.1px]">
        <Background1 />
        <Footer />
      </footer>
    </div>
  );
};

export default LOGIN;
