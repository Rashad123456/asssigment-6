const Banner = () => {
  return (
    <div className="container-width py-16 grid md:grid-cols-2 gap-10 items-center">
      
      <div>
        <h1 className="text-5xl font-bold mb-4">
          Supercharge Your Digital Workflow
        </h1>

        <p className="text-gray-500 mb-6">
          Discover premium tools that help you work faster and smarter.
        </p>

        <div className="flex gap-4">
          <button className="btn bg-purple-600 text-white border-none">
            Explore Products
          </button>
          <button className="btn btn-outline">
            View Demo
          </button>
        </div>
      </div>

      <img src="/banner.png" className="w-full" />
    </div>
  );
};

export default Banner;