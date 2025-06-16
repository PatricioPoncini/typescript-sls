import {formatJSONResponse} from "@libs/api-gateway";
import {UserService} from "../../../users/service/user.service";
import {container} from "../../../config/inversify.config";

export const main = async () => {
    const userService = container.get(UserService);

    return formatJSONResponse({
        users: userService.findAll()
    })
}