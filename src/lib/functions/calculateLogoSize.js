export function calculateLogoSize(detailData) {
	let logoWidth = 'w-[calc(100vw/2)]';
	let logoMaxWidth = 'max-w-md';

	if (detailData.images.logos.length > 0) {
		if (detailData.images.logos[0].aspect_ratio < 3) {
			logoWidth = 'w-[calc(100vw/2.5)]';
			logoMaxWidth = 'max-w-sm';
			if (detailData.images.logos[0].aspect_ratio < 2) {
				logoWidth = 'w-[calc(100vw/3)]';
				logoMaxWidth = 'max-w-xs';
				if (detailData.images.logos[0].aspect_ratio < 1) {
					logoWidth = 'w-[calc(100vw/5)]';
					logoMaxWidth = 'max-w-[250px]';
				}
			}
		}
	}
	return { logoWidth, logoMaxWidth };
}
