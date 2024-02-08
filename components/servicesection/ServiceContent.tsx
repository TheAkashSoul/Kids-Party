import { PiFishFill } from "react-icons/pi";
import { FaRainbow } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { PiFlyingSaucerFill } from "react-icons/pi";

export default function ServiceContent() {
  const ServiceContent = [
    {
      id: 1,
      icon: <PiFishFill size={60} color="#FFECDA" />,
      title: "Quality Professionals",
      description:
        "Our Kids Party Entertainment are highly skilled, experienced professionals that love working with kids.",
    },
    {
      id: 2,
      icon: <FaRainbow size={60} color="#FFECDA" />,
      title: "Bonded & Insured",
      description:
        "All of our entertainers are bonded and insured and our parties and events have $10,000,000 of public liability cover.",
    },
    {
      id: 3,
      icon: <FaHandshakeSimple size={60} color="#FFECDA" />,
      title: "Our Guarantee",
      description:
        "We are so confident of our services we offer a refund if a client is unhappy with our entertainment.",
    },
    {
      id: 4,
      icon: <PiFlyingSaucerFill size={60} color="#FFECDA" />,
      title: "24-7 Support",
      description:
        "We have a 24-7 customer support via live chat on our website or in your customer account.",
    },
  ];
  return (
    <main className="mt-20">
      <div className="flex flex-col md:flex-row items-start gap-10">
        {ServiceContent.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-1">
            <div>{item.icon}</div>
            <h3 className="text-xl font-medium text-center">{item.title}</h3>
            <p className="text-center text-sm font-light">{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
