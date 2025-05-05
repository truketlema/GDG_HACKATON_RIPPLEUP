import { useEffect, useRef } from "react";
import satisfied_client from "../../assets/about/satisfied_client.svg";
import traveler from "../../assets/about/traveler.svg";
import destination from "../../assets/about/destination.svg";
import award from "../../assets/about/award.svg";

export const Statistics = () => {
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counters = countersRef.current?.querySelectorAll(".counter");
    if (!counters) return;

    counters.forEach((counter) => {
      let initial_count = 0;
      const final_count = parseInt(
        (counter as HTMLElement).dataset.count || "0",
        10,
      );
                         
      const interval = setInterval(() => {
        if (final_count < 100) {
          initial_count += 1;
        } else if (final_count < 1000) {
          initial_count += 2;
        } else {
          initial_count += 5;
        }

        (counter as HTMLElement).innerText = initial_count.toString();

        if (initial_count >= final_count) {
          clearInterval(interval);
        }
      }, 100);
    });
  }, []);

  return (
    <div
      ref={countersRef}
      className={`mt-15 mb-0 flex h-[40vh] w-full shrink-0 place-items-center justify-evenly bg-[url(@/assets/about/unsplash_okVXy9tG3KY.png)] bg-cover bg-center bg-no-repeat sm:h-[65vh] lg:mt-25 lg:h-150 lg:justify-evenly lg:gap-20`}
    >
      <div className="flex flex-col flex-wrap place-items-center p-2 text-white lg:flex-row lg:flex-nowrap lg:gap-5">
        <img
          className="h-6 w-6 lg:h-[80px] lg:w-[80px]"
          src={satisfied_client}
        />
        <div className="flex flex-col place-items-center">
          <p className="text-center text-[20px] font-semibold lg:text-[48px]">
            <span className="counter" data-count="126">
              0
            </span>{" "}
            <span className="align-super">+</span>
            <span className="block text-center text-[12px] font-normal text-[#E7E7E7] lg:text-[18px]">
              Satisfied Clients
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-wrap place-items-center p-2 text-white lg:flex-row lg:flex-nowrap lg:gap-5">
        <img className="h-6 w-6 lg:h-[80px] lg:w-[80px]" src={traveler} />
        <div className="flex flex-col place-items-center">
          <p className="text-center text-[20px] font-semibold lg:text-[48px]">
            <span className="counter" data-count="230">
              0
            </span>{" "}
            <span className="align-super">+</span>
            <span className="block text-center text-[12px] font-normal text-[#E7E7E7] lg:text-[18px]">
              New travelers
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-wrap place-items-center p-2 text-white lg:flex-row lg:flex-nowrap lg:gap-5">
        <img className="h-6 w-6 lg:h-[80px] lg:w-[80px]" src={destination} />
        <div className="flex flex-col place-items-center">
          <p className="text-center text-[20px] font-semibold lg:text-[48px]">
            <span className="counter" data-count="230">
              0
            </span>{" "}
            <span className="align-super">+</span>
            <span className="block text-center text-[12px] font-normal text-[#E7E7E7] lg:text-[18px]">
              Destinations
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col place-items-center p-2 text-white lg:flex-row lg:flex-nowrap">
        <img className="h-6 w-6 lg:h-[80px] lg:w-[80px]" src={award} />
        <div className="flex flex-col place-items-center">
          <p className="text-center text-[20px] font-semibold lg:text-[48px]">
            <span className="counter" data-count="230">
              0
            </span>{" "}
            <span className="align-super">+</span>
            <span className="block text-center text-[12px] font-normal text-[#E7E7E7] lg:text-[18px]">
              Awards
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
