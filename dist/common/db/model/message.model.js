"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModel = exports.Message = void 0;
const tslib_1 = require("tslib");
const collections_1 = require("./../../constant/collections");
const typegoose_1 = require("@typegoose/typegoose");
const base_model_1 = require("./base.model");
let Message = class Message extends base_model_1.BaseModel {
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "fullName", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], Message.prototype, "message", void 0);
Message = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({ schemaOptions: { collection: collections_1.CollectionNames.MESSAGE } })
], Message);
exports.Message = Message;
exports.MessageModel = (0, typegoose_1.getModelForClass)(Message);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vZGIvbW9kZWwvbWVzc2FnZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsOERBQStEO0FBQy9ELG9EQUE0RTtBQUM1RSw2Q0FBeUM7QUFPbEMsSUFBTSxPQUFPLEdBQWIsTUFBTSxPQUFRLFNBQVEsc0JBQVM7Q0FhckMsQ0FBQTtBQVZHO0lBQUMsSUFBQSxnQkFBSSxFQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDOzt5Q0FDUDtBQUVoQjtJQUFDLElBQUEsZ0JBQUksRUFBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQzs7NENBQ0o7QUFFbkI7SUFBQyxJQUFBLGdCQUFJLEVBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7O3dDQUNSO0FBVk4sT0FBTztJQUhuQixJQUFBLHdCQUFZLEVBQUMsRUFBRSxhQUFhLEVBQUUsRUFBRSxVQUFVLEVBQUUsNkJBQWUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO0dBRzVELE9BQU8sQ0FhbkI7QUFiWSwwQkFBTztBQWVQLFFBQUEsWUFBWSxHQUFHLElBQUEsNEJBQWdCLEVBQUMsT0FBTyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbGxlY3Rpb25OYW1lcyB9IGZyb20gJy4vLi4vLi4vY29uc3RhbnQvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0TW9kZWxGb3JDbGFzcywgbW9kZWxPcHRpb25zLCBwcm9wIH0gZnJvbSBcIkB0eXBlZ29vc2UvdHlwZWdvb3NlXCI7XG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tIFwiLi9iYXNlLm1vZGVsXCI7XG5cblxuXG5AbW9kZWxPcHRpb25zKHsgc2NoZW1hT3B0aW9uczogeyBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uTmFtZXMuTUVTU0FHRSB9IH0pXG5cblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBCYXNlTW9kZWwge1xuXG5cbiAgICBAcHJvcCh7cmVxdWlyZWQ6IHRydWV9KVxuICAgIGZ1bGxOYW1lOiBzdHJpbmdcblxuICAgIEBwcm9wKHtyZXF1aXJlZDogdHJ1ZX0pXG4gICAgcGhvbmVOdW1iZXI6IHN0cmluZ1xuXG4gICAgQHByb3Aoe3JlcXVpcmVkOiB0cnVlfSlcbiAgICBtZXNzYWdlOiBzdHJpbmdcblxuXG59XG5cbmV4cG9ydCBjb25zdCBNZXNzYWdlTW9kZWwgPSBnZXRNb2RlbEZvckNsYXNzKE1lc3NhZ2UpIl19