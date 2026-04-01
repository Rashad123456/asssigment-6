const Pricing = () => {
  return (
    <section className="container-width pb-0">
      <div className="bg-white border border-cyan-400 px-8 py-10">
        <h2 className="text-[38px] font-bold text-center text-[#1f2937] mb-2">
          Simple, Transparent Pricing
        </h2>

        <p className="text-[12px] text-gray-500 text-center mb-8">
          Choose the plan that works best for your needs and grow at your own pace.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-sm p-5 bg-white">
            <h3 className="text-[16px] font-bold mb-1">Starter</h3>
            <p className="text-[11px] text-gray-400 mb-4">Best for getting started</p>

            <h4 className="text-[38px] font-bold mb-5">$0</h4>

            <ul className="space-y-2 text-[12px] text-gray-600 mb-6">
              <li> Access to free tools</li>
              <li> Basic templates</li>
              <li> Community support</li>
              <li> Preview our products</li>
            </ul>

            <button className="btn w-full h-8 min-h-8 rounded-full bg-[#7c3aed] text-white border-none text-[11px] hover:bg-[#6d28d9]">
              Get Started Free
            </button>
          </div>

          <div className="rounded-sm p-5 bg-gradient-to-b from-[#7c3aed] to-[#9333ea] text-white shadow-md">
            <h3 className="text-[16px] font-bold mb-1">Pro</h3>
            <p className="text-[11px] text-white/80 mb-4">Best for professionals</p>

            <h4 className="text-[38px] font-bold mb-5">$29/mo</h4>

            <ul className="space-y-2 text-[12px] mb-6">
              <li> Access to all premium tools</li>
              <li> Unlimited downloads</li>
              <li>Priority support</li>
              <li> New releases monthly</li>
              <li> Advanced analytics</li>
            </ul>

            <button className="btn w-full h-8 min-h-8 rounded-full bg-white text-[#7c3aed] border-none text-[11px] hover:bg-gray-100">
              Start Pro Trial
            </button>
          </div>

          <div className="border border-gray-200 rounded-sm p-5 bg-white">
            <h3 className="text-[16px] font-bold mb-1">Enterprise</h3>
            <p className="text-[11px] text-gray-400 mb-4">For teams and businesses</p>

            <h4 className="text-[38px] font-bold mb-5">$99/mo</h4>

            <ul className="space-y-2 text-[12px] text-gray-600 mb-6">
              <li> Everything in Pro</li>
              <li> Team collaboration</li>
              <li>Custom integrations</li>
              <li> Dedicated support</li>
              <li> Advanced user roles</li>
            </ul>

            <button className="btn w-full h-8 min-h-8 rounded-full bg-[#7c3aed] text-white border-none text-[11px] hover:bg-[#6d28d9]">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;