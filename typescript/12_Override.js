var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangle2 = /** @class */ (function () {
    function Rectangle2(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle2.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle2;
}());
var Square2 = /** @class */ (function (_super) {
    __extends(Square2, _super);
    function Square2(width) {
        return _super.call(this, width, width) || this;
    }
    Square2.prototype.toString = function () {
        return "Square[width: ".concat(this.width, "]");
    };
    return Square2;
}(Rectangle2));
var mySq2 = new Square2(7);
console.log(mySq2.toString());
