export const player = {
	css: "player",
	borderless: false,
	rows: [
		{},
		{
			cols: [
				{},
				{
					view: "icon",
					icon: "mdi mdi-shuffle-variant mdi-24px active"
				},
				{
					view: "icon",
					icon: "mdi mdi-skip-previous mdi-24px"
				},
				{
					view: "icon",
					icon: "mdi mdi-pause mdi-24px"
				},
				{
					view: "icon",
					icon: "mdi mdi-skip-next mdi-24px"
				},
				{
					view: "icon",
					icon: "mdi mdi-repeat mdi-24px"
				},
				{},
				{
					view: "icon",
					icon: "mdi mdi-download mdi-24px"
				},
				{
					view: "icon",
					icon: "mdi mdi-dots-vertical mdi-24px"
				}
			]
		},
		{
			cols: [
				{
					css: "trackTime",
					width: 30,
					borderless: true,
					template: "<span>2:32</span>"
				},
				{
					view: "slider",
					css: "playerSlider",
					width: 300,
					min: 0,
					max: 100,
					value: 70,
					step: 1,
					name: "track"
				},
				{
					css: "trackTime",
					width: 30,
					borderless: true,
					template: "<span>3:38</span>"
				}
			]
		},
		{}
	]
};
