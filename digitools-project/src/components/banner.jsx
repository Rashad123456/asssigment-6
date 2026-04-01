const Banner = () => {
  return (
    <section className="container-width py-14 md:py-16 grid md:grid-cols-2 gap-10 items-center bg-white">
      <div className="pl-2 md:pl-6">
        <p className="inline-block text-[10px] font-semibold text-[#7c3aed] bg-[#efe7ff] px-3 py-1 rounded-full mb-4">
          We Have All Premium Digital Solutions
        </p>

        <h1 className="text-[36px] md:text-[54px] font-bold leading-[1.02] text-[#1f2937] mb-5">
          Supercharge Your
          <br />
          Digital Workflow
        </h1>

        <p className="text-[13px] text-gray-500 leading-6 max-w-[430px] mb-6">
          Access premium AI tools, design assets, templates, and productivity
          software — all in one place. Start creating better today.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="btn h-10 min-h-10 px-5 rounded-full bg-[#7c3aed] text-white border-none text-[12px] hover:bg-[#6d28d9]">
            Explore Products
          </button>

          <button className="btn h-10 min-h-10 px-5 rounded-full bg-white border border-[#d9c7ff] text-[#7c3aed] text-[12px] hover:bg-[#f8f3ff]">
            View Demo
          </button>
        </div>
      </div>

      <div className="flex justify-center md:justify-end pr-2 md:pr-8">
        <img
          src="/banner.png"
          alt="Banner"
          className="w-full max-w-[320px] rounded-sm"
        />
      </div>
    </section>
  );
};

export default Banner;