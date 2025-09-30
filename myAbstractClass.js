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
var TakePhoto = /** @class */ (function () {
    function TakePhoto(mode, filter) {
        this.mode = mode;
        this.filter = filter;
        this.mode = mode;
        this.filter = filter;
    }
    TakePhoto.prototype.getReelTime = function () {
        return 44;
    };
    return TakePhoto;
}());
// abstract class cannot be instantiated
// const rinku = new TakePhoto("night", "beauty");
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Instagram.prototype.getSepia = function () {
        console.log("Sepia");
    };
    Instagram.prototype.getReelTime = function () {
        return 45;
    };
    return Instagram;
}(TakePhoto));
var user1 = new Instagram("night", "beauty");
console.log(user1.getReelTime());
// Sepia
// undefined -> because this abstract method doesnot return anything after printing the "Sepia"
// console.log(user1.getSepia());
user1.getSepia();
