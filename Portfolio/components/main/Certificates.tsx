import Image from "next/image";

const certs = [
  {
    title: "Oracle OCI AI Foundations Associate",
    issuer: "Oracle",
    img: "/certs/oracle-ai.png",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=FF554D682506D00DA5EF1A1DF492A0F478D42DD790D85ECDE41618E6C55560C3",
  },
  {
    title: "Docker & Kubernetes Masterclass",
    issuer: "Scaler",
    img: "/certs/doker.jpeg",
    url: "https://your-verification-link",
  },
  {
    title: "Gemini Certified Student",
    issuer: "Google",
    img: "/certs/gemini.png",
    url: "https://your-verification-link",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="flex flex-col items-center justify-center py-20"
    >
      <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Certificates
      </h2>

      {/* ✅ Same behavior as projects */}
      <div className="w-full px-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {certs.map((c, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl border border-[#2A0E61] p-5 shadow-lg w-full"
          >
            <Image
              src={c.img}
              alt={c.title}
              width={600}
              height={350}
              className="rounded-lg object-cover w-full h-[220px]"
            />

            <h3 className="text-white text-xl font-semibold mt-4">
              {c.title}
            </h3>

            <p className="text-gray-400">{c.issuer}</p>

            <div className="flex justify-center mt-5">
              <a
                href={c.url}
                target="_blank"
                className="py-2 px-6 button-primary text-white text-center rounded-lg z-40"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
