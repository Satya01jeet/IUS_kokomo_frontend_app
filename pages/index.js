import Image from "next/image";
import MainHeader from "../components/main-header";
import FormSection from "../components/form-section";
import Background1 from "../components/background1";
import Footer from "../components/footer";
import ResponsiveMenu from "../components/responsiveMenu";

const LOGIN = () => {
  return (
    <div className="w-full bg-gray-100 min-h-screen overflow-hidden flex flex-col">
      {/* Main Header */}
      <MainHeader />
      

      {/* Hero Section */}
      <div className="bg-gray-100 border-b border-gray-400 flex items-center justify-center">
        <Image
          className="w-full h-auto object-cover"
          width={1440}
          height={698}
          alt=""
          src="/content@2x.png"
        />
      </div>

      {/* Form Section */}
      <FormSection />

      {/* Footer */}
      <footer className="mt-auto">
        <Background1 />
        <Footer />
      </footer>
    </div>
  );
};

export default LOGIN;
