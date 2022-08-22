"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.RegistrationController = void 0;
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var swagger_1 = require("@nestjs/swagger");
var RegistrationController = /** @class */ (function () {
    function RegistrationController(registrationService) {
        this.registrationService = registrationService;
    }
    RegistrationController.prototype.getPreference = function () {
        return this.registrationService.getPreference();
    };
    RegistrationController.prototype.getPreference2 = function () {
        return "frontend ";
    };
    // @Get(':role')
    // getInput(@Param() param :Modeldto): string {
    //  return this.registrationService.getInput(param);
    // }
    RegistrationController.prototype.getInput = function (query) {
        return this.registrationService.getInput(query.role);
    };
    RegistrationController.prototype.createUser = function (registrationdto) {
        console.log(registrationdto);
        return this.registrationService.createUser();
    };
    RegistrationController.prototype.uploadFile = function (file) {
        console.log('file', file);
        return 'File upload api';
    };
    __decorate([
        (0, common_1.Version)('1'),
        (0, common_1.Get)('job')
    ], RegistrationController.prototype, "getPreference");
    __decorate([
        (0, swagger_1.ApiHeader)({ name: 'Version-header', "enum": ['1', '2'], description: 'Please select a version', required: true }),
        (0, common_1.Version)('2'),
        (0, common_1.Get)('job')
    ], RegistrationController.prototype, "getPreference2");
    __decorate([
        (0, common_1.Get)('job/:role'),
        __param(0, (0, common_1.Query)())
    ], RegistrationController.prototype, "getInput");
    __decorate([
        (0, common_1.Post)('jobprofile'),
        __param(0, (0, common_1.Body)())
    ], RegistrationController.prototype, "createUser");
    __decorate([
        (0, common_1.Post)('upload'),
        (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
            dest: "./uploads"
        })),
        __param(0, (0, common_1.UploadedFile)())
    ], RegistrationController.prototype, "uploadFile");
    RegistrationController = __decorate([
        (0, common_1.Controller)()
    ], RegistrationController);
    return RegistrationController;
}());
exports.RegistrationController = RegistrationController;
