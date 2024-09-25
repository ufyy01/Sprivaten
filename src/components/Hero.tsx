import { useEffect } from "react";
import HeroForm from "./HeroForm";
import { Button } from "./ui/button";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="h-screen lg:flex items-center gap-40 pb-5 pt-16 lg:pt-0">
			<div
				className="w-full lg:w-5/12 lg:ms-10"
				data-aos="zoom-out-left"
				data-aos-duration="1000">
				<h1 className="font-bold text-3xl lg:text-3xl xl:text-5xl text-center lg:text-start">
					Drive More Customers
					<br className="hidden lg:block" /> Through Digital
				</h1>
				<p className="mt-4 text-[737373] text-center lg:text-start">
					We know how large objects will act, but things on a small scale
				</p>
				<div
					className="lg:flex my-5 text-center lg:text-start"
					data-aos="fade-right"
					data-aos-delay="1500">
					<Button className="bg-[#00A0C1] rounded-3xl">Get Quote Now</Button>
					<Button
						data-aos="zoom-in"
						className="text-[#00A0C1] rounded-3xl px-5 border-2 border-[#00A0C1] bg-transparent ms-4"
						variant="outline">
						Learn More
					</Button>
				</div>
			</div>
			<div
				className="pb-4 mt-16 lg:mt-0"
				data-aos="flip-right"
				data-aos-duration="1000">
				<HeroForm />
			</div>
		</div>
	);
};

export default Hero;
