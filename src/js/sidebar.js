import {dataSidebar} from "../data/dataSidebar";

export const sidebar = {
	view: "tree",
	id: "sidebar",
	select: true,
	css: "sidebarDark",
	template(obj, common) {
		if (obj.$level === 1) return `${common.icon(obj, common)}<span class="sidebarItem">${obj.value.toUpperCase()}</span>`;
		if (obj.$level === 2 && obj.icon) return `<span class="${obj.icon}"></span>${obj.value}`;
		return obj.value;
	},
	width: 310,
	data: dataSidebar,
	on: {
		onBeforeSelect(id) {
			if (id === "id_create") {
				webix.message("Playlist created", "info", 1000);
				return false;
			}
			return true;
		}
	}
};
