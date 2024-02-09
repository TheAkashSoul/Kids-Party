import { IoIosStar } from "react-icons/io";
import { ImQuotesLeft } from "react-icons/im";

export default function Testimonials() {
  return (
    <main className="flex flex-col md:mt-32 mt-14 w-full md:w-[80%] mx-auto md:mb-20 mb-8">
      <div className="flex flex-col items-start md:items-center gap-1 px-12 md:px-6">
        <h2 className="text-[#EFCAF2] font-semibold text-2xl">
          We Get Called Names
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl font-light">
          Quality, Fun, Professional.. Are the most popular ones.
        </p>
      </div>

      <div className="md:mt-20 mt-10 lg:px-20 md:px-4 px-12">
        <div className="flex md:flex-row flex-col gap-6 justify-center md:items-center">
          <div className="flex flex-col">
            <div className="ml-6 -mb-5 z-20">
              <ImQuotesLeft size={40} color="#383838" />
            </div>
            <div className="flex flex-col bg-[#FFECDA] p-10 rounded-3xl lg:w-60 w-auto">
              <div>
                <div className="flex flex-row gap-1">
                  <IoIosStar size={20} color="#383838" />
                  <IoIosStar size={20} color="#383838" />
                  <IoIosStar size={20} color="#383838" />
                  <IoIosStar size={20} color="#383838" />
                  <IoIosStar size={20} color="#383838" />
                </div>
                <p className="mt-3 text-base font-light text-[#383838]">
                  "We loved the entertainment and hope to see you all again
                  soon."
                </p>
                <p className="mt-6 mb-3 font-bold text-[#383838] md:text-md">
                  - Stephanie Volde
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="ml-6 -mb-5 z-20">
              <ImQuotesLeft size={40} color="#383838" />
            </div>
            <div className="flex flex-col bg-[#FFECDA] p-10 rounded-3xl lg:w-60 w-auto">
              <div>
                <div className="flex flex-row gap-1">
                  <IoIosStar size={20} color="#383838" />
                  <IoIosStar size={20} color="#383838" />
                  <IoIosStar size={20} color="#383838" />
                  <IoIosStar size={20} color="#383838" />
                  <IoIosStar size={20} color="#383838" />
                </div>
                <p className="mt-3 text-base font-light text-[#383838]">
                  "Easy to book, fun and a great experience for the kids. Will
                  definitely book again."
                </p>
                <p className="mt-6 mb-3 font-bold text-[#383838] text-md">
                  - John Rivers
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="ml-6 -mb-5 z-20">
              <ImQuotesLeft size={40} color="#383838" />
            </div>
            <div className="flex flex-col bg-[#FFECDA] p-10 rounded-3xl lg:w-60 w-auto">
              <div>
                <div className="flex flex-row gap-1">
                  <IoIosStar size={20} color="#383838" />
                  <IoIosStar size={20} color="#383838" />
                  <IoIosStar size={20} color="#383838" />
                  <IoIosStar size={20} color="#383838" />
                  <IoIosStar size={20} color="#383838" />
                </div>
                <p className="mt-3 text-base font-light text-[#383838]">
                  "We loved the entertainment and hope to see you all again
                  soon."
                </p>
                <p className="mt-6 mb-3 font-bold text-[#383838] text-md">
                  - Stephanie Volde
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
