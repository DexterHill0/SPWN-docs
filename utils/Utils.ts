export const join = (...args: string[]) => {
	return args.join(" ");
}

export const open = (url: string) => {
	window.open(url, "_blank");
}