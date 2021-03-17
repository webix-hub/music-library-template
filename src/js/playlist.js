import {dataPlayer} from "../data/dataPlayer";

let customLike = (obj, common, val) => `<span class="webix_table_checkbox like pointer mdi mdi-heart ${val ? "checked" : "unchecked"}"></span>`;
let customPlay = (obj, common, val) => `<span class="webix_table_checkbox playControl pointer mdi ${val ? "mdi-pause checked" : "mdi-play unchecked"}"></span>`;

export const playlist = {
	view: "datatable",
	headerRowHeight: 48,
	columns: [
		{id: "rank", header: "", width: 30},
		{id: "state", header: "", width: 50, template: customPlay},
		{id: "like", header: "", width: 50, template: customLike},
		{id: "name", header: "Name", minWidth: 220, fillspace: true},
		{id: "artist", header: "Artist", minWidth: 220, fillspace: true},
		{id: "time", header: "Time", width: 190},
		{id: "album", header: "Album", width: 300},
		{id: "style", header: "Style", width: 130}
	],
	select: true,
	checkboxRefresh: true,
	data: dataPlayer
};
