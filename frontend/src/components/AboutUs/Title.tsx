import React from "react";
export const Title = () => {
	return (
		<div
			className={`mt-0 flex h-[85vh] w-full flex-col place-items-center items-center justify-center bg-[url(@/assets/about/unsplash_rjfOdiB7k-E.jpg)] bg-cover bg-bottom text-white lg:pb-45`}
		>
			<p className="flex items-center text-xl font-semibold text-white drop-shadow-[#11111196] md:text-3xl">
				<span className="mr-2 text-green-800">Home</span>  
				<svg
					className="inline mx-2 "
					xmlns="http://www.w3.org/2000/svg"
					width="11"
					height="18"
					viewBox="0 0 11 18"
					fill="none"
				>
					<path
						d="M11 9L2.222 0L0 2.2782L6.556 9L0 15.7218L2.222 18L11 9Z"
						fill="black"
					/>
				</svg>
				<span>About Us</span>
			</p>
		</div>
	);
};
