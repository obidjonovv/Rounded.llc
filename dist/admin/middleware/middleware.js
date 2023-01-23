"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAdminPlugin = void 0;
const tslib_1 = require("tslib");
const fastify_plugin_1 = tslib_1.__importDefault(require("fastify-plugin"));
const employee_error_1 = require("../../common/db/model/admin/employee/employee.error");
const authentication_1 = require("../../common/middleware/authentication");
const employee_service_1 = require("../service/admin/employee.service");
async function autheticateAdmin(req, reply) {
    try {
        await (0, authentication_1.authToken)(req, reply);
        if (!req.user)
            throw new Error();
        const { phoneNumber } = req.user;
        const employee = await (0, employee_service_1.getEmployeeByPhoneNumberService)(phoneNumber); ///funtion;;
        if (!employee)
            throw employee_error_1.EmployeeResponse.NotFound(phoneNumber);
        req.employee = employee;
    }
    catch (e) {
        console.log(e);
        return reply.status(401).send({
            ...e,
            code: 401,
            message: "Unauthorized",
            statusCode: 401,
        });
    }
}
async function plugin(server, options, next) {
    server.decorate("authAdmin", autheticateAdmin);
    next();
}
exports.authAdminPlugin = (0, fastify_plugin_1.default)(plugin);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi9taWRkbGV3YXJlL21pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDRFQUFnQztBQUNoQyx3RkFBdUY7QUFDdkYsMkVBQW1FO0FBQ25FLHdFQUFvRjtBQUVwRixLQUFLLFVBQVUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEtBQUs7SUFDdEMsSUFBSTtRQUNBLE1BQU0sSUFBQSwwQkFBUyxFQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUU1QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUk7WUFBRSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7UUFFakMsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFFakMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFBLGtEQUErQixFQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWTtRQUNqRixJQUFJLENBQUMsUUFBUTtZQUFFLE1BQU0saUNBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVELEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBQzNCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQixHQUFHLENBQUM7WUFDSixJQUFJLEVBQUUsR0FBRztZQUNULE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLFVBQVUsRUFBRSxHQUFHO1NBQ2xCLENBQUMsQ0FBQTtLQUNMO0FBQ0wsQ0FBQztBQUVELEtBQUssVUFBVSxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJO0lBQ3ZDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDL0MsSUFBSSxFQUFFLENBQUM7QUFDWCxDQUFDO0FBRVksUUFBQSxlQUFlLEdBQUcsSUFBQSx3QkFBRSxFQUFDLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZwIGZyb20gXCJmYXN0aWZ5LXBsdWdpblwiO1xuaW1wb3J0IHsgRW1wbG95ZWVSZXNwb25zZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZGIvbW9kZWwvYWRtaW4vZW1wbG95ZWUvZW1wbG95ZWUuZXJyb3JcIjtcbmltcG9ydCB7IGF1dGhUb2tlbiB9IGZyb20gXCIuLi8uLi9jb21tb24vbWlkZGxld2FyZS9hdXRoZW50aWNhdGlvblwiO1xuaW1wb3J0IHsgZ2V0RW1wbG95ZWVCeVBob25lTnVtYmVyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlL2FkbWluL2VtcGxveWVlLnNlcnZpY2VcIjtcblxuYXN5bmMgZnVuY3Rpb24gYXV0aGV0aWNhdGVBZG1pbihyZXEsIHJlcGx5KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXV0aFRva2VuKHJlcSwgcmVwbHkpO1xuXG4gICAgICAgIGlmICghcmVxLnVzZXIpIHRocm93IG5ldyBFcnJvcigpO1xuXG4gICAgICAgIGNvbnN0IHsgcGhvbmVOdW1iZXIgfSA9IHJlcS51c2VyO1xuXG4gICAgICAgIGNvbnN0IGVtcGxveWVlID0gYXdhaXQgZ2V0RW1wbG95ZWVCeVBob25lTnVtYmVyU2VydmljZShwaG9uZU51bWJlcik7IC8vL2Z1bnRpb247O1xuICAgICAgICBpZiAoIWVtcGxveWVlKSB0aHJvdyBFbXBsb3llZVJlc3BvbnNlLk5vdEZvdW5kKHBob25lTnVtYmVyKTtcbiAgICAgICAgcmVxLmVtcGxveWVlID0gZW1wbG95ZWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgcmV0dXJuIHJlcGx5LnN0YXR1cyg0MDEpLnNlbmQoe1xuICAgICAgICAgICAgLi4uZSxcbiAgICAgICAgICAgIGNvZGU6IDQwMSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIsXG4gICAgICAgICAgICBzdGF0dXNDb2RlOiA0MDEsXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBwbHVnaW4oc2VydmVyLCBvcHRpb25zLCBuZXh0KSB7XG4gICAgc2VydmVyLmRlY29yYXRlKFwiYXV0aEFkbWluXCIsIGF1dGhldGljYXRlQWRtaW4pO1xuICAgIG5leHQoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGF1dGhBZG1pblBsdWdpbiA9IGZwKHBsdWdpbik7XG4iXX0=