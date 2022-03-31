import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;

/* each key is a 'type' containing array of items of that type  */
const sections = {};

/* categorizes by types */
menuItems.forEach((item) => {
	// adds a new category
	if (!(item.type in sections)) sections[item.type] = [];

	// adds the element to the category
	sections[item.type].push(item);
});

/* sorts each section by menuOrder */
Object.keys(sections).forEach((type) => {
	sections[type].sort((item1, item2) => item1.menuOrder - item2.menuOrder);
});

console.log(menuItems);
