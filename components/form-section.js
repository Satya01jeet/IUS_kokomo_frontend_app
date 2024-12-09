import PropTypes from "prop-types";

const FormSection = ({ className = "" }) => {
  return (
    <main
      className={`absolute top-[782.6px] left-[0px] w-[1440px] flex flex-col items-center justify-center text-center text-9xl text-gray-200 font-plus-jakarta-sans ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-center">
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-center z-[0]">
          <div className="self-stretch bg-gray-100 flex flex-col items-start justify-start py-[30.4px] px-[472px] z-[0]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[60px]">
              <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-10">
                <div className="self-stretch flex flex-col items-center justify-start gap-2.5">
                  <b className="self-stretch relative tracking-[-0.02em] leading-[32px]">
                    Welcome to Kokomo Yacht Club
                  </b>
                  <div className="self-stretch relative text-mini leading-[20px]">
                    Please log in to continue.
                  </div>
                </div>
                <form className="m-0 self-stretch flex flex-col items-center justify-start gap-5">
                  <input
                    className="border-gray-400 border-[1.5px] border-solid [outline:none] font-plus-jakarta-sans text-mini bg-steelblue self-stretch rounded-2xl box-border h-10 flex flex-col items-start justify-center py-0 px-3.5 text-gray-300"
                    type="text"
                  />
                  <input
                    className="border-gray-400 border-[1.5px] border-solid [outline:none] font-plus-jakarta-sans text-mini bg-steelblue self-stretch rounded-2xl box-border h-10 flex flex-col items-start justify-center py-0 px-3.5 text-gray-300"
                    type="text"
                  />
                </form>
              </div>
              <div className="self-stretch rounded-2xl bg-darkslateblue-200 h-10 flex flex-col items-center justify-center">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-mini leading-[20px] font-medium font-plus-jakarta-sans text-gray-100 text-left inline-block">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

FormSection.propTypes = {
  className: PropTypes.string,
};

export default FormSection;
