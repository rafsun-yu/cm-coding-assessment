import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;
console.log(menuItems);

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

/* renders */
Object.keys(sections).forEach((type) => {
	sections[type].forEach((item) => {
		let itemElement = createItemElement(item);

		// assumption: the id of container is exactly same as the type name.
		document.getElementById(type).appendChild(itemElement);
	});
});

/* Creates and returns a '.item' element from a menuItem object. */
function createItemElement(item) {
	let itemElement = document.createElement("div");
	itemElement.classList.add("item");

	// name
	let nameElement = document.createElement("h3");
	nameElement.classList.add("name");
	nameElement.textContent = item.menuOrder + 1 + ". " + item.name;

	if (item.spicy) {
		itemElement.classList.add("spicy");
	}

	// price
	let priceElement = document.createElement("div");
	priceElement.classList.add("price");
	priceElement.textContent = "$" + item.price;

	// description
	let descElement = document.createElement("div");
	descElement.classList.add("desc");
	descElement.textContent = item.description + ".";

	itemElement.appendChild(nameElement);
	itemElement.appendChild(descElement);
	itemElement.appendChild(priceElement);

	return itemElement;
}
