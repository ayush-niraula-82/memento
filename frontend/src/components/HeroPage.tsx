import { useNavigate } from "react-router";

const HeroPage = () => {
  const navigate = useNavigate();

  const routeToMemento = () => {
    navigate("/memento");
  };

  return (
    <>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
            <div className="flex flex-col gap-8 lg:w-3/5">
              <h2 className="mb-8 text-3xl font-bold md:text-5xl">
                Capture Your Precious Memories
              </h2>
              <p className="text-sm sm:text-base">
                Memento helps you cherish and preserve your life's most
                meaningful moments. Easily store your memories with photos,
                videos, and heartfelt stories, all in one secure place. Relive
                your special times anytime, anywhere.
              </p>
              <a
                onClick={routeToMemento}
                className="w-52 rounded-md bg-black px-6 py-3 text-center font-semibold text-white cursor-pointer hover:bg-gray-800"
              >
                Open Memento
              </a>
              <div className="my-8 h-px w-full bg-black"></div>
              <div className="flex flex-col gap-4 rounded-md border border-solid bg-gray-100 p-6 md:p-4">
                <p className="text-sm">
                  🌟 "Memento transformed the way I preserve my memories. It
                  feels amazing to revisit special moments with such ease!" -
                  Alex
                </p>
              </div>
            </div>
            <div className="w-full rounded-md bg-gray-100 max-[991px]:h-[475px] lg:w-2/5"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroPage;
