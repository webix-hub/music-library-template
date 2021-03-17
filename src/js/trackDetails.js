import {dataPlayer} from "../data/dataPlayer";

export const trackDetails = {
	css: "trackDetailsWrapp",
	width: 380,
	borderless: true,
	data: dataPlayer[2],
	template(obj) {
		const html = `
        <div class="trackDetails">
            <span>Name: ${obj.name} </span>
            <span>Artist: ${obj.artist} </span>
            <span>Time: ${obj.time} </span>
            <span>Album: ${obj.album} </span>
            <span>Style: ${obj.style} </span>
        </div>`;
		return html;
	}
};
