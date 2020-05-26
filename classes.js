var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = /** @class */ (function () {
    function user(name, age) {
        this.name = name;
        this.age = age;
    }
    user.prototype.print = function () {
        return this.name + " : " + this.age;
    };
    return user;
}());
var school = /** @class */ (function (_super) {
    __extends(school, _super);
    function school(name, age, snames) {
        var _this = _super.call(this, name, age) || this;
        _this.sname = snames;
        return _this;
    }
    school.prototype.printdetails = function () {
        return this.age + ":" + this.name + ":" + this.sname;
    };
    return school;
}(user));
var x = new school("mk", 20, "sjr");
console.log(x.printdetails());
