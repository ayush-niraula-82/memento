import Card from "./shared/Card";

const MementoPage = () => {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold md:text-5xl">
            The latest and greatest news
          </h2>
          <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
            Lorem ipsum dolor sit amet elit ut aliquam
          </p>
          <div className="mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-3 lg:mb-12 lg:gap-6">
           <Card/>
           
          </div>
          <a className="rounded-md bg-black px-6 py-3 text-center font-semibold text-white">
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default MementoPage;
