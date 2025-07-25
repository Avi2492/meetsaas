import React from "react";
import { createAvatar } from "@dicebear/core";
import { botttsNeutral, initials } from "@dicebear/collection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface IGenerativeAvatarProps {
	seed: string;
	className?: string;
	variant: "botttsneutral" | "initials";
}
export const GeneratedAvatar = ({
	seed,
	className,
	variant,
}: IGenerativeAvatarProps) => {
	let avatar;

	if (variant === "botttsneutral") {
		avatar = createAvatar(botttsNeutral, { seed });
	} else {
		avatar = createAvatar(initials, {
			seed,
			fontSize: 42,
			fontWeight: 500,
		});
	}
	return (
		<Avatar className={cn(className)}>
			<AvatarImage
				src={avatar.toDataUri()}
				alt="avatar"
			/>
			<AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
		</Avatar>
	);
};
