class Carousel {
  constructor(element) {
    this.element = element;
    // resize the carousel here because everything is positioned absolute, and I didn't want to hard code it
    this.resize();
    window.addEventListener("resize", event => {
      this.resize();
    });
    this.leftButton = this.element.querySelector(".button-left");
    this.rightButton = this.element.querySelector(".button-right");
    // get the boxes within the carousel, in an array
    this.boxElements = Array.from(this.element.getElementsByClassName("box"));
    // this will keep track of what image we are on
    this.dataNow = this.element.dataset.carousel;
    // create new instances of Box for each box, and store them in an array
    this.boxes = this.boxElements.map(box => new Box(box));
    // the highest index of our boxes
    this.maxData = this.boxes.length - 1;
    // listen on the left button
    this.leftButton.addEventListener("click", () => {
      // as long as the image we are on isn't the last one
      if (this.dataNow < this.maxData) {
        // the active box is the box with the index of the carousel's data-carousel number, which is stored in dataNow
        this.activeBox = this.boxes[this.dataNow];
        // increment dataNow
        this.dataNow += 1;
        // update the carousel dataset
        this.element.dataset.carousel = this.dataNow;
        // and slide left
        this.activeBox.slideLeft();
      } else {
        this.activeBox = this.boxes[this.dataNow];
        this.dataNow = 0;
        this.element.dataset.carousel = this.dataNow;
        this.activeBox.slideLeft();
      }
    });
    this.rightButton.addEventListener("click", () => {
      if (this.dataNow > 0) {
        this.activeBox = this.boxes[this.dataNow];
        this.dataNow -= 1;
        this.element.dataset.carousel = this.dataNow;
        this.activeBox.slideRight();
      } else {
        this.activeBox = this.boxes[this.dataNow];
        this.dataNow = this.maxData;
        this.element.dataset.carousel = this.dataNow;
        this.activeBox.slideRight();
      }
    });
  }
  resize() {
    this.width = this.element.offsetWidth;
    this.element.style.height = `${this.width * 0.75 - 4}px`;
  }
}

class Box {
  constructor(element) {
    this.element = element;
  }
  slideLeft() {
    // get the carousel data number, it was updated before the animation was called, so it currently represents the next element we want to switch to
    let carouselData = Number(
      document.querySelector(".carousel").dataset.carousel
    );
    // slide this box out of frame
    TweenMax.fromTo(this.element, 1, { right: 0 }, { right: "100%" });
    // get the next box
    let nextBox = document.querySelector(`.box[data-box='${carouselData}']`);
    // and slide it into frame
    TweenMax.fromTo(nextBox, 1, { right: "-100%" }, { right: 0 });
  }
  slideRight() {
    let carouselData = Number(
      document.querySelector(".carousel").dataset.carousel
    );
    TweenMax.fromTo(this.element, 1, { right: 0 }, { right: "-100%" });
    let previousBox = document.querySelector(
      `.box[data-box='${carouselData}']`
    );
    TweenMax.fromTo(previousBox, 1, { right: "100%" }, { right: 0 });
  }
}

let carousel = document.querySelector(".carousel");
new Carousel(carousel);
