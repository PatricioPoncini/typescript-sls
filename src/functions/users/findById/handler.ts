import {formatJSONResponse} from "@libs/api-gateway";
import {APIGatewayProxyEvent} from "aws-lambda";
import {UserService} from "../../../users/service/user.service";
import {container} from "../../../config/inversify.config";

export const main = async (event: APIGatewayProxyEvent) => {
    try {
        const { id } = event.pathParameters;
        const userService = container.get(UserService);

        const user = userService.findById(id);
        if (!user) {
            return formatJSONResponse({ message: 'User not found' }, 404);
        }

        return formatJSONResponse({
            user
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
