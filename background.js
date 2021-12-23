let mWiki = "https://lang.m.wikipedia.org";

chrome.webRequest.onBeforeRequest.addListener(
	function (details) {
		const url = new URL(details.url);

		if (url.hostname === "*.m.wikipedia.org") return;

		mWiki = mWiki.replace('lang', url.hostname.split('.')[0])

		return { redirectUrl: mWiki + url.pathname + url.search + url.hash };
	},
	{
		urls: [
			"*://*.wikipedia.org/*"
		],
		types: [
			"main_frame",
			"sub_frame",
			"stylesheet",
			"script",
			"image",
			"object",
			"xmlhttprequest",
			"other",
		],
	},
	["blocking"]
);