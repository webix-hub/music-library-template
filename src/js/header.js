import {userTemplate} from "./userTemplate";

export const header = {
	view: "toolbar",
	paddingX: 10,
	paddingY: 6,
	cols: [
		{
			view: "label",
			label: "MUSIC PLAYER"
		},
		{},
		{
			view: "search",
			placeholder: "Search..",
			width: 320
		},
		{
			view: "icon",
			icon: "mdi mdi-playlist-play mdi-24px"
		},
		{},
		{
			view: "icon",
			icon: "mdi mdi-volume-high"
		},
		{
			view: "slider",
			css: "playerSlider",
			width: 146,
			value: "60",
			min: 0,
			max: 100,
			name: "s1"
		},
		userTemplate
	]
};
