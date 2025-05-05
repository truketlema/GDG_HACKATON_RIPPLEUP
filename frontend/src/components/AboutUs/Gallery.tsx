export const Gallery = () => {
  return (
    <div className="mt-10 mb-32 sm:mt-25">
      <div className="flex flex-col place-items-center justify-center">
        <h1 className="text-[18px] font-medium text-[#878787] md:text-[36px]">
          Gallery
        </h1>
        <p className="text-[30px] font-semibold md:text-[60px]">
          Unforgettable moment
        </p>
      </div>
      <div className="mt-10 grid h-screen w-screen grid-cols-2 grid-rows-4 justify-center gap-2 px-3 lg:grid-cols-4 lg:grid-rows-2 lg:px-30">
        <div className="col-span-2 row-span-2 flex items-end rounded-[10px] bg-[url(@/assets/about/bali.png)] bg-center bg-no-repeat object-fill lg:bg-cover">
          <p className="w-full ml-5 lg:align-text-bottom  leading-[70px] font-semibold text-white lg:text-4xl">
            Bali
          </p>
        </div>
        <div className="col-span-2 grid items-end rounded-[10px] bg-[url(@/assets/about/dubai.png)] bg-center  bg-no-repeat lg:bg-cover">
          <p className="w-full ml-5 align-text-bottom lg:leading-[70px] font-semibold text-white lg:text-4xl">
            Dubai
          </p>
        </div>
        <div className="flex items-end rounded-[10px] bg-[url(@/assets/about/paris.png)] bg-center bg-cover bg-no-repeat">
          <p className="w-full ml-5 align-text-bottom lg:leading-[70px] font-semibold text-white lg:text-4xl">
            Paris
          </p>
        </div>
        <div className="flex items-end rounded-[10px] bg-[url(@/assets/about/italy.png)] bg-no-repeat lg:bg-cover">
          <p className="w-full ml-5 align-text-bottom lg:leading-[70px] font-semibold text-white lg:text-4xl">
            Italy
          </p>
        </div>
      </div>
    </div>
  );
};
