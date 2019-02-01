class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab='${this.data}']`
    );

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener("click", () => {
      this.select();
    });
  }

  select() {
    // Get all of the elements with the tabs-link class
    // const links = document.getElementsByClassName("tabs-link");
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    this.deselect();
    // Array.from(links).forEach(link => {
    //   link.classList.remove("tabs-link-selected");
    // });
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected");
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
  deselect() {
    const links = document.querySelectorAll(".tabs-link");
    links.forEach(link => link.classList.remove("tabs-link-selected"));
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items = document.querySelectorAll(".tabs-item");
    // Remove the class "tabs-item-selected" from each element
    this.deselect();
    // items.forEach(item => item.classList.remove("tabs-item-selected"));
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add("tabs-item-selected");
  }
  deselect() {
    const items = document.querySelectorAll(".tabs-item");
    items.forEach(item => item.classList.remove("tabs-item-selected"));
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

let links = document.querySelectorAll(".tabs-link");
// links.forEach(link => new TabLink(link));

// The first part of the stretch I am very confused on: 'Create a Single Tabs component that creates all instances of TabLink. It will also hold the currently selected tab.'
// I'm not sure what it is asking for, but here is a single Tabs component tht is creating the instances of TabLink, and my code is still working, but I don't think I'm correctly implementing what it is asking for. I really want to do the carousel though so I'm moving on to that and might come back to this later.
class Tabs {
  constructor(nodeList) {
    this.tabLink = Array.from(nodeList).map(element => new TabLink(element));
  }
}
let tabsHolder = new Tabs(links);
// console.log(tabsHolder);
