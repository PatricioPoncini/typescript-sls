import {formatJSONResponse} from "@libs/api-gateway";
import {APIGatewayProxyEvent} from "aws-lambda";
import {UserService} from "../../../users/service/user.service";
import {container} from "../../../config/inversify.config";

export const main = async (event: APIGatewayProxyEvent) => {
    const { id } = event.pathParameters;
    const userService = container.get(UserService);

    return formatJSONResponse({
        user: userService.findById(id)
    })
}
