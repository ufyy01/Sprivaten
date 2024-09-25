import { Icon } from "@iconify/react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
	return (
		<header>
			<nav className="flex justify-between items-center w-10/12 lg:w-9/12 pt-4 mx-auto">
				<h1 className="font-bold text-xl">Sprivaten</h1>
				<div className="flex">
					<ul className="gap-4 hidden lg:flex">
						<li>Home</li>
						<li>Product</li>
						<li>Pricing</li>
						<li>Contact</li>
						<li>
							<Icon
								icon="material-symbols:search"
								className="mt-1"
								style={{ fontSize: "24px" }}
							/>
						</li>
						<li>
							<Icon
								icon="mdi:cart-outline"
								className="mt-1"
								style={{ fontSize: "24px" }}
							/>
						</li>
					</ul>
					<div className="lg:hidden">
						<Sheet>
							<SheetTrigger>
								<Icon
									icon="bx:menu-alt-right"
									className="mt-1"
									style={{ fontSize: "24px" }}
								/>
							</SheetTrigger>
							<SheetContent>
								<ul className="text-xl flex flex-col gap-4 mt-3">
									<li className="border-b-2 w-full text-center">Home</li>
									<li className="border-b-2 w-full text-center">Product</li>
									<li className="border-b-2 w-full text-center">Pricing</li>
									<li className="border-b-2 w-full text-center">Contact</li>
									<li className="border-b-2 w-full text-center">Search</li>
									<li className="border-b-2 w-full text-center">Cart</li>
								</ul>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
