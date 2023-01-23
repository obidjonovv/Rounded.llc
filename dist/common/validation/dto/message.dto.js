"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDto = void 0;
const tslib_1 = require("tslib");
const dto_group_1 = require("./../../constant/dto.group");
const class_validator_1 = require("class-validator");
class MessageDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)({ groups: [dto_group_1.DtoGroup.CREATE] }),
    tslib_1.__metadata("design:type", String)
], MessageDto.prototype, "fullName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsPhoneNumber)(null, { groups: [dto_group_1.DtoGroup.CREATE] }),
    tslib_1.__metadata("design:type", String)
], MessageDto.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)({ groups: [dto_group_1.DtoGroup.CREATE] }),
    tslib_1.__metadata("design:type", String)
], MessageDto.prototype, "message", void 0);
exports.MessageDto = MessageDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5kdG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tbW9uL3ZhbGlkYXRpb24vZHRvL21lc3NhZ2UuZHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwwREFBc0Q7QUFDdEQscURBQTBEO0FBRTFELE1BQWEsVUFBVTtDQVN0QjtBQVJHO0lBQUMsSUFBQSwwQkFBUSxFQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsb0JBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDOzs0Q0FDeEI7QUFFaEI7SUFBQyxJQUFBLCtCQUFhLEVBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsb0JBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDOzsrQ0FDaEM7QUFFbkI7SUFBQyxJQUFBLDBCQUFRLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxvQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7OzJDQUN6QjtBQVJuQixnQ0FTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER0b0dyb3VwIH0gZnJvbSAnLi8uLi8uLi9jb25zdGFudC9kdG8uZ3JvdXAnO1xuaW1wb3J0IHsgSXNQaG9uZU51bWJlciwgSXNTdHJpbmcgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlRHRvIHtcbiAgICBASXNTdHJpbmcoeyBncm91cHM6IFtEdG9Hcm91cC5DUkVBVEVdIH0pXG4gICAgZnVsbE5hbWU6IHN0cmluZ1xuXG4gICAgQElzUGhvbmVOdW1iZXIobnVsbCwgeyBncm91cHM6IFtEdG9Hcm91cC5DUkVBVEVdIH0pXG4gICAgcGhvbmVOdW1iZXI6IHN0cmluZ1xuXG4gICAgQElzU3RyaW5nKHsgZ3JvdXBzOiBbRHRvR3JvdXAuQ1JFQVRFXSB9KVxuICAgIG1lc3NhZ2U6IHN0cmluZ1xufVxuIl19