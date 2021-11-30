export const join = (...args: string[]) => {
	return args.join(" ");
}

export const open = (url: string) => {
	window.open(url, "_blank");
}

export const getOS = () => {
	if (navigator.appVersion.indexOf("Mac") !== -1 && navigator.appVersion.indexOf("iPhone") === -1) return "MacOS";
	if (navigator.appVersion.indexOf("Windows") !== -1) return "Windows";
	if (navigator.appVersion.indexOf("Linux") !== -1) return "Linux";
	if (navigator.appVersion.indexOf("Android") !== -1) return "Android";

	return undefined;
}