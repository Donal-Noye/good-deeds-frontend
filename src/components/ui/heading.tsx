import React from "react";

interface HeadingProps {
	children?: React.ReactNode;
	title: string
}

export const Heading = ({children, title}: HeadingProps) => {
	return (
		<div className="flex items-center pb-4 mb-4 border-b-2 border-b-neutral-600 gap-4">
			<h3 className="text-2xl font-medium">{title}</h3>
			{children}
		</div>
	)
}