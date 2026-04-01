const steps = [
  {
    id: 1,
    title: "Create Account",
    description:
      "Sign up for free in seconds to access tools and manage all your digital assets in one place.",
    image: "/package.png",
  },
  {
    id: 2,
    title: "Choose Products",
    description:
      "Browse our catalog and select the tools that fit your needs, budget, and goals.",
    image: "/Play.png",
  },
  {
    id: 3,
    title: "Start Creating",
    description:
      "Download and start using your purchased tools immediately. No locks, no waiting.",
    image: "/rocket.png",
  },
];

const Steps = () => {
  return (
    <section className="container-width py-24">
      <h2 className="text-[40px] font-bold text-center text-[#1f2937] mb-3">
        Get Started In 3 Steps
      </h2>

      <p className="text-[12px] text-gray-500 text-center mb-12">
        Start using premium digital tools in minutes, not hours.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white border border-gray-100 rounded-md shadow-sm px-8 py-10 text-center relative"
          >
            <div className="absolute -top-3 right-5 w-6 h-6 rounded-full bg-[#7c3aed] text-white text-[10px] flex items-center justify-center">
              {step.id}
            </div>

            <img
              src={step.image}
              alt={step.title}
              className="w-14 h-14 mx-auto object-contain mb-5"
            />

            <h3 className="text-[18px] font-bold text-[#1f2937] mb-2">
              {step.title}
            </h3>

            <p className="text-[12px] text-gray-500 leading-5">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;