"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Registrationdto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var Registrationdto = /** @class */ (function () {
    function Registrationdto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: "Please enter username"
        }),
        (0, class_validator_1.IsNotEmpty)()
    ], Registrationdto.prototype, "Firstname");
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: "Enter Middlename (it's optional) "
        })
    ], Registrationdto.prototype, "Middlenumber");
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: "Enter your Lastname or Initial is accepted"
        }),
        (0, class_validator_1.IsNotEmpty)()
    ], Registrationdto.prototype, "Lastname");
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: "Please Enter your contactnumber"
        }),
        (0, class_validator_1.IsNotEmpty)()
    ], Registrationdto.prototype, "Contactnumber");
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: "Enter date of birth"
        }),
        (0, class_validator_1.IsNotEmpty)()
    ], Registrationdto.prototype, "Dateofbirth");
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: "Select your gender"
        }),
        (0, class_validator_1.IsNotEmpty)()
    ], Registrationdto.prototype, "Gender");
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: "Enter 10th standard final mark"
        }),
        (0, class_validator_1.IsNotEmpty)()
    ], Registrationdto.prototype, "ClassTenthPercentage");
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: "Enter 12th standard final mark"
        }),
        (0, class_validator_1.IsNotEmpty)()
    ], Registrationdto.prototype, "ClassTwelthPercentage");
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: "Enter your Educationaltype"
        }),
        (0, class_validator_1.IsNotEmpty)()
    ], Registrationdto.prototype, "EducationalType");
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: "Enter your degree"
        }),
        (0, class_validator_1.IsNotEmpty)()
    ], Registrationdto.prototype, "Degree");
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: "Enter your Regno"
        }),
        (0, class_validator_1.IsNotEmpty)()
    ], Registrationdto.prototype, "Regno");
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: "Enter the branch you are studing"
        }),
        (0, class_validator_1.IsNotEmpty)()
    ], Registrationdto.prototype, "Branch");
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: "Enter whether you are having blacklog or not"
        }),
        (0, class_validator_1.IsNotEmpty)()
    ], Registrationdto.prototype, "Backlogs");
    return Registrationdto;
}());
exports.Registrationdto = Registrationdto;
