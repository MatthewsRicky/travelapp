import Image from "next/image";

interface ButtonProps {
	type: "button";
	title: string;
	icon?: string;
	variant: "btn_dark_green";
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
	return (
		<button
			className='flex cursor-pointer'
			type={type}>
			{icon && (
				<Image
					src={icon}
					alt={title}
					width={24}
					height={24}
				/>
			)}
			<label>{title}</label>
		</button>
	);
};

export default Button;
