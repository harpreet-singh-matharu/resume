//PageTitleJS

// This script is provided by Sebastian EkstrÃ¶m. He is great front-end developer from Sweden. Credit goes to him. Thank you man!

"use strict"
class PageTitleChange {

  constructor(noFocusTitle, focusTitle) {
    this.noFocusTitle = noFocusTitle;
    this.focusTitle = focusTitle;
  }

  init() {
    this.listenToChange();
  }

  listenToChange() {
    let hidden;
    let state;
    let visibilityChange;

    if (typeof document.hidden !== "undefined") {
      hidden = "hidden";
      visibilityChange = "visibilitychange";
      state = "visibilityState";
    }

    document.addEventListener(visibilityChange, ()=> {
      this.setTitle(document[state]);
    }, false);

  }

  setTitle(state) {
    let title = state === "hidden" ? this.noFocusTitle : this.focusTitle;
    document.title = title;
  }

}

let setPageTitle = new PageTitleChange("Miss you!", document.title);
setPageTitle.init();