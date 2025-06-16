import {formatJSONResponse} from "@libs/api-gateway";
import {APIGatewayProxyEvent, Context} from "aws-lambda";

const findById = async (event: APIGatewayProxyEvent, context: Context) => {
    const { awsRequestId } = context;
    const { id } = event.pathParameters; // obtiene el valor del param
    const { age } = event.queryStringParameters; // obtiene el valor de la query
    return formatJSONResponse({
        message: `Hi! You requested information for user ID: ${id}. This user is ${age} years old.`,
        awsRequestId,
    })
}

export const main = findById;