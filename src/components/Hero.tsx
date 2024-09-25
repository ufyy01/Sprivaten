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
				className="lg:w-5/12 lg:ms-10"
				data-aos="zoom-out-left"
				data-aos-duration="1000">
				<h1 className="font-bold text-3xl lg:text-3xl xl:text-5xl">
					Drive More Customers
					<br /> Through Digital
				</h1>
				<p className="mt-4 text-[737373]">
					We know how large objects will act, but things on a small scale
				</p>
				<div
					className="flex my-5 gap-3"
					data-aos="fade-right"
					data-aos-delay="1500">
					<Button className="bg-[#00A0C1] rounded-3xl">Get Quote Now</Button>
					<Button
						data-aos="zoom-in"
						className="text-[#00A0C1] rounded-3xl px-5 border-2 border-[#00A0C1] bg-transparent"
						variant="outline">
						Learn More
					</Button>
				</div>
			</div>
			<div
				className="pb-4 mt-16 lg:mt-0 "
				data-aos="flip-right"
				data-aos-duration="1000">
				<HeroForm />
			</div>
		</div>
	);
};

export default Hero;
