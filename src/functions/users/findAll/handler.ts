import {formatJSONResponse} from "@libs/api-gateway";
import {UserService} from "../../../users/service/user.service";
import {container} from "../../../config/inversify.config";

export const main = async () => {
    try {
        const userService = container.get(UserService);

        const users = userService.findAll();
        if (users.length === 0) {
            return formatJSONResponse({ message: 'Users not found' }, 404);
        }

        return formatJSONResponse({
            users: userService.findAll()
        }, 200)
    } catch (error) {
        return formatJSONResponse(
            {
                message: 'Internal Server Error',
                error: error instanceof Error ? error.message : 'Unknown error',
            },
            500
        );
    }
}