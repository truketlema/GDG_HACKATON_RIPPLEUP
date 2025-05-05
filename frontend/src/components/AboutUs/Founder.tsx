import founder from "../../assets/about/unsplash_7BjmDICVloE.png";
export const Founder = () => {
  return (
    <div className="mt-10 flex min-h-[70vh] max-h-max w-full justify-center items-center flex-col gap-8 p-3 sm:mt-25 sm:h-[63.3vh] sm:flex-row sm:gap-20">
      <img
        className="h-[274.5px] w-[278.5px] lg:h-[549px] lg:w-[557px]"
        src={founder}
      />
      <div className="flex w-[80vw] flex-col gap-4 p-2 sm:w-[50vw]">
        <svg
          className="h-[32px] w-[40px] lg:h-[65px] lg:w-[81px]"
          xmlns="http://www.w3.org/2000/svg"
          width="81"
          height="65"
          viewBox="0 0 81 65"
          fill="none"
        >
          <path
            d="M7.76401 9.90384C13.376 3.81984 21.868 0.73584 33 0.73584H37V12.0118L33.784 12.6558C28.304 13.7518 24.492 15.9078 22.452 19.0718C21.3876 20.7764 20.7839 22.728 20.7 24.7358H33C34.0609 24.7358 35.0783 25.1573 35.8284 25.9074C36.5786 26.6576 37 27.675 37 28.7358V56.7358C37 61.1478 33.412 64.7358 29 64.7358H5.00001C3.93914 64.7358 2.92172 64.3144 2.17158 63.5643C1.42143 62.8141 1 61.7967 1 60.7358V40.7358L1.012 29.0598C0.976005 28.6158 0.216005 18.0958 7.76401 9.90384ZM73 64.7358H49C47.9391 64.7358 46.9217 64.3144 46.1716 63.5643C45.4214 62.8141 45 61.7967 45 60.7358V40.7358L45.012 29.0598C44.976 28.6158 44.216 18.0958 51.764 9.90384C57.376 3.81984 65.868 0.73584 77 0.73584H81V12.0118L77.784 12.6558C72.304 13.7518 68.492 15.9078 66.452 19.0718C65.3876 20.7764 64.7839 22.728 64.7 24.7358H77C78.0609 24.7358 79.0783 25.1573 79.8284 25.9074C80.5786 26.6576 81 27.675 81 28.7358V56.7358C81 61.1478 77.412 64.7358 73 64.7358Z"
            fill="black"
          />
        </svg>
        <p className="text-[12px] text-[#484848] sm:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          porttitor sapien et urna tincidunt fringilla. Vivamus at augue
          interdum, blandit arcu quis, laoreet ipsum. In eu ipsum urna.
          Suspendisse suscipit est et neque.
        </p>
        <p className="text-[12px] text-[#484848] sm:text-[18px]">
          Mauris tempor tellus ante, ut fermentum erat gravida vel. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aenean nec justo dui. Ut et consequat dui, a malesuada
          ipsum. Pellentesque nec turpis viverra, blandit mi a, accumsan justo.
        </p>
        <p className="text-[20px] font-semibold text-black sm:text-[36px]">
          Siti Sarah
          <span className="block text-[12px] font-normal text-[#484848] sm:text-[18px]">
            Founder Travosca
          </span>
        </p>
      </div>
    </div>
  );
};
