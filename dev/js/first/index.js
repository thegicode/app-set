"use strict";
(() => {
  // dev/scripts/pages/first/Base.js
  var Base = class {
    constructor(name) {
      this.name = name;
    }
    log() {
      return this.name;
    }
  };

  // dev/scripts/pages/first/index.js
  console.log("Base", Base);
})();
//# sourceMappingURL=index.js.map
