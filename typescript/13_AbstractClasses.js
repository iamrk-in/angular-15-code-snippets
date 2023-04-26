// abstract classes : classes can be written in a way that allows them to be used as a base class for other class without having to implement all the members. 
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
var Polygon3 = /** @class */ (function () {
    function Polygon3() {
    }
    Polygon3.prototype.toString = function () {
        return "Polygon[area=".concat(this.getArea3(), "]");
    };
    return Polygon3;
}());
var Rectangle3 = /** @class */ (function (_super) {
    __extends(Rectangle3, _super);
    function Rectangle3(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle3.prototype.getArea3 = function () {
        return this.width * this.height;
    };
    return Rectangle3;
}(Polygon3));
var myRect = new Rectangle3(5, 9);
console.log(myRect.getArea3());
