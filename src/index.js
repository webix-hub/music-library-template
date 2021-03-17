import {header} from "./js/header";
import {sidebar} from "./js/sidebar";
import {friendsList} from "./js/friendsList";
import {userMenu} from "./js/userMenu";
import {cover} from "./js/cover";
import {player} from "./js/player";
import {playlist} from "./js/playlist";
import {trackDetails} from "./js/trackDetails";


// SCSS
import "./styles/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize) {
		webix.CustomScroll.init();
	}

	webix.ui({
		rows: [
			header,
			{
				type: "clean",
				cols: [
					sidebar,
					{
						rows: [
							{
								height: 130,
								padding: {top: 1},
								cols: [
									cover,
									{
										minWidth: 10
									},
									player,
									{
										minWidth: 10
									},
									trackDetails
								]
							},
							{
								padding: 1,
								cols: [
									playlist,
									friendsList
								]
							}
						]
					}
				]
			}
		]
	});

	webix.ui(userMenu);

	webix.$$("sidebar").select("3.1");
});
