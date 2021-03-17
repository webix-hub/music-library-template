import {dataPlayer} from "../data/dataPlayer";

export const cover = {
	width: 310,
	borderless: true,
	data: dataPlayer[2],
	template(obj) {
		const html = `<div class="cover">
            <div class="coverImg"><img src="./covers/${obj.cover ? obj.cover : "empty_cover.jpg"}"></div>
            <div class="coverText">
                <div class="coverRow">
                    <span class="coverName">${obj.name}</span>
                    <span class="like pointer mdi mdi-heart checked"></span>
                </div>
                <span class="coverTrack">${obj.artist} - ${obj.album}</span>
            </div>
        </div>`;
		return html;
	}
};
