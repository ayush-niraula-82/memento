import { useNavigate } from "react-router";

const HeroPage = () => {
  const navigate = useNavigate();

  const routeToMemento = () => {
    navigate("/memento");
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          {/* Left Section */}
          <div className="flex flex-col gap-6 lg:w-3/5">
            <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">
              Capture Your Precious Memories, Anytime, Anywhere
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Memento is your personal memory keeper. Whether it's a joyful
              moment, a milestone achievement, or a beautiful experience,
              Memento helps you preserve these memories securely in one place.
              Relive your most cherished moments, share them with loved ones,
              and keep them forever.
            </p>

            <div className="flex gap-6">
              <a
                onClick={routeToMemento}
                className="inline-block rounded-lg bg-black px-8 py-4 text-lg font-semibold text-white cursor-pointer hover:bg-gray-800 transition duration-300"
              >
                Open Memento
              </a>
              <a
                href="#learn-more"
                className="inline-block rounded-lg border-2 border-gray-800 px-8 py-4 text-lg font-semibold text-gray-800 hover:bg-gray-100 transition duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Testimonial */}
            <div className="mt-8 flex flex-col gap-4 rounded-md bg-gray-100 p-6 md:p-8">
              <p className="text-base text-gray-600">
                🌟 "Memento has completely transformed how I cherish my
                memories. It's so easy to add, revisit, and share moments with
                my family. I can relive my favorite times anytime!" - Alex
              </p>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="rounded-lg shadow-lg overflow-hidden w-full max-w-[500px] h-[400px] bg-gray-300">
              <img
                src="https://via.placeholder.com/500x400"
                alt="Hero Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
