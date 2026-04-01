import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gradient-to-r from-[#6d28d9] to-[#9333ea] text-white py-16 mt-0">
        <div className="container-width text-center">
          <h2 className="text-[34px] font-bold mb-3">
            Ready To Transform Your Workflow?
          </h2>

          <p className="text-[12px] text-white/90 max-w-[650px] mx-auto mb-6">
            Join thousands of professionals already using DigiTools to work
            smarter and create faster.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="btn h-9 min-h-9 rounded-full px-5 bg-white text-[#7c3aed] border-none text-[11px]">
              Explore Products
            </button>

            <button className="btn h-9 min-h-9 rounded-full px-5 bg-transparent border border-white text-white text-[11px]">
              View Pricing
            </button>
          </div>

          <p className="text-[11px] text-white/80 mt-5">
            Try the Pro plan free • No setup costs • Cancel anytime
          </p>
        </div>
      </div>

      <div className="bg-[#0f172a] text-white">
        <div className="container-width py-12 grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-[28px] font-bold mb-3">DigiTools</h3>
            <p className="text-[12px] text-gray-400 leading-6 max-w-[280px] mb-4">
              Premium digital assets and tools for creators, marketers, and
              professionals.
            </p>

            <div className="flex gap-3">
              <span className="w-7 h-7 rounded-full bg-white text-[#0f172a] flex items-center justify-center text-[12px]">
                <FaFacebookF />
              </span>
              <span className="w-7 h-7 rounded-full bg-white text-[#0f172a] flex items-center justify-center text-[12px]">
                <FaInstagram />
              </span>
              <span className="w-7 h-7 rounded-full bg-white text-[#0f172a] flex items-center justify-center text-[12px]">
                <FaLinkedinIn />
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-[12px] text-gray-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Tools</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-[12px] text-gray-400">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-[12px] text-gray-400">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="container-width border-t border-gray-700 py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-gray-400">
          <p>© 2026 DigiTools. All rights reserved</p>

          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;