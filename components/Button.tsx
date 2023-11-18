interface ButtonProps {
	type: string;
	title: string;
	icon?: string;
	variant: string;
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
	return <button type='button'>{title}</button>;
};

export default Button;
