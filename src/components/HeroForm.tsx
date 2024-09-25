import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { HeroFormSchema } from "@/lib/utils";
import { Input } from "./ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import * as z from "zod";

type HeroFormData = z.infer<typeof HeroFormSchema>;

const HeroForm = () => {
	const form = useForm<HeroFormData>({
		resolver: zodResolver(HeroFormSchema),
		defaultValues: {
			name: "",
			email: "",
			department: "",
			time: "",
		},
	});

	const onSubmit = (data: HeroFormData) => {
		console.log("Form Data:", data);
	};

	return (
		<div className="bg-white rounded-2xl shadow-lg px-8 py-3">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div>
						<h3 className="font-bold text-center">Book Appointment</h3>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem className="my-2">
									<FormLabel>Name*</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Full Name" type="text" />
									</FormControl>

									{form.formState.errors.name && (
										<FormMessage>
											{form.formState.errors.name.message}
										</FormMessage>
									)}
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email*</FormLabel>
									<FormControl>
										<Input
											{...field}
											placeholder="example@gmail.com"
											type="email"
										/>
									</FormControl>

									{form.formState.errors.email && (
										<FormMessage>
											{form.formState.errors.email.message}
										</FormMessage>
									)}
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="department"
							render={({ field }) => (
								<FormItem className="my-2">
									<FormLabel>Department* </FormLabel>
									<FormControl>
										<Select {...field}>
											<SelectTrigger>
												<SelectValue placeholder="Please select" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="accounting">Accounting</SelectItem>
												<SelectItem value="marketing">Marketing</SelectItem>
												<SelectItem value="sales">Sales</SelectItem>
											</SelectContent>
										</Select>
									</FormControl>

									{form.formState.errors.department && (
										<FormMessage>
											{form.formState.errors.department.message}
										</FormMessage>
									)}
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="time"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Time*</FormLabel>
									<FormControl>
										<Select {...field}>
											<SelectTrigger>
												<SelectValue placeholder="4:00 Available" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="4pm">4:00 Available</SelectItem>
												<SelectItem value="5pm">5:00 Available</SelectItem>
												<SelectItem value="6pm">6:00 Available</SelectItem>
											</SelectContent>
										</Select>
									</FormControl>

									{form.formState.errors.time && (
										<FormMessage>
											{form.formState.errors.time.message}
										</FormMessage>
									)}
								</FormItem>
							)}
						/>
					</div>
					<div className="text-center">
						<Button className="mt-3 bg-[#ffa62b]" size="sm">
							Book Appointment
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default HeroForm;
