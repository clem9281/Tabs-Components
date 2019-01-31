class Box {
  constructor(element) {
    this.element = element;
    this.leftButton = this.element.querySelector(".button-left");
    this.rightButton = this.element.querySelector(".button-right");
    console.log(this.element.dataset.box);
    this.nextBox = document.querySelector(
      `.box[data-box='${Number(this.element.dataset.box) + 1}']`
    );
    console.log(this.nextBox);
    this.previousBox = document.querySelector(
      `.box[data-box='${Number(this.element.dataset.box) - 1}']`
    );
    this.leftButton.addEventListener("click", () => {
      this.slideLeft();
    });
    this.rightButton.addEventListener("click", () => {
      this.slideRight();
    });
  }
  slideLeft() {
    if (this.element !== this.element.parentNode.lastElementChild) {
      this.element.classList.remove("box-selected");
      this.element.classList.add(".go-left");
      this.nextBox.classList.add("box-selected");
    }
  }
  slideRight() {
    if (this.element != this.element.parentNode.firstElementChild) {
      this.element.classList.remove("box-selected");
      this.previousBox.classList.add("box-selected");
    }
  }
}

let carouselBoxes = document.querySelectorAll(".box");
carouselBoxes.forEach(box => new Box(box));
