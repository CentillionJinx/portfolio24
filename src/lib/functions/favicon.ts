// Function to set the favicon
export function setFavicon(url: string) {
	let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
	if (!link) {
		link = document.createElement('link');
		link.rel = 'icon';
		document.getElementsByTagName('head')[0].appendChild(link);
	}
	link.href = url;
}
export function setTitle(title: string) {
	document.title = title;
}