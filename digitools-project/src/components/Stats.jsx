const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-[#6d28d9] to-[#9333ea] text-white">
      <div className="container-width grid grid-cols-1 md:grid-cols-3 text-center py-8">
        <div className="md:border-r border-white/20">
          <h2 className="text-[34px] font-bold">50K+</h2>
          <p className="text-[12px] text-white/90 mt-1">Active Users</p>
        </div>

        <div className="md:border-r border-white/20">
          <h2 className="text-[34px] font-bold">200+</h2>
          <p className="text-[12px] text-white/90 mt-1">Premium Tools</p>
        </div>

        <div>
          <h2 className="text-[34px] font-bold">4.9</h2>
          <p className="text-[12px] text-white/90 mt-1">Rating</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;