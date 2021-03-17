import {dataFriends} from "../data/dataFriends";

export const friendsList = {
	width: 380,
	rows: [
		{
			view: "toolbar",
			height: 48,
			padding: {left: 20, right: 20},
			cols: [
				{
					view: "label",
					label: "My Friends"
				},
				{
					view: "search",
					placeholder: "Search..",
					width: 180
				}
			]
		},
		{
			view: "list",
			data: dataFriends,
			select: true,
			scroll: true,
			type: {
				height: 64,
				css: "userItem",
				template(obj) {
					const html = `
						<div class="userInner">
							<div class="userAvatar">
								<img class="userImage" src="./friends/${obj.avatar}">
							</div>
							<div class="userContent">
								<div class='userName'>${obj.name}</div>
								<span>${obj.songs} songs</span>    
							</div>
						</div>
					`;
					return html;
				}
			}
		}
	]
};
