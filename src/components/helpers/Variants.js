// Variants (Animation) for fontAwesome icons:
// Rotates them around in 1 second
export const svgVariants = {
	hidden: { rotate: -360 },
	visible: {
		rotate: 0,
		transition: {
			duration: 1,
		},
	},
};

// Variants (Animation) for boxes with links:
// Change opacity from  0 to 1 - show element, in 1 second
export const boxVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 2,
		},
	},
};

// Variants (Animation) for buttons:
// Makes button pulsate + text & border shadow infinitely while mouse hovers over
export const bigBtnVariants = {
	hover: {
		scale: 1.1,
		textShadow: "0px 0px 8px rgb(255, 255, 255)",
		boxShadow: "0px 0px 8px #30d95d",
		transition: {
			duration: 0.3,
			repeat: Infinity,
			repeatType: "mirror",
		},
	},
};

// Variants (Animation) for buttons:
// Makes button pulsate infinitely while mouse hovers over
export const btnVariants = {
	hover: {
		scale: 1.1,
		transition: {
			duration: 0.3,
			repeat: Infinity,
			repeatType: "mirror",
		},
	},
};

// Variants (Animation) for div with list of languages:
// Change opacity from  0 to 1 - show element, in 1 second
export const languageVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};

// Variants (Animation) for header:
// Makes header pulsate infinitely with a little delay
export const headingVariants = {
	animate: {
		scale: 1.1,
		transition: {
			duration: 1,
			repeat: Infinity,
			repeatType: "mirror",
			delay: 1,
			repeatDelay: 2,
		},
	},
};

// Variants (Animation) for div element:
// Makes div fly in from right (with little spring bounce)
export const containerVariants = {
	hidden: {
		opacity: 0,
		x: "100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			delay: 0.5,
		},
	},
	exit: {
		x: "-100vw",
		transition: {
			ease: "easeInOut",
		},
	},
};
