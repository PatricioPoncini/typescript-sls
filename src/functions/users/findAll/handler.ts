import {formatJSONResponse} from "@libs/api-gateway";
import {APIGatewayProxyEvent, Context} from "aws-lambda";

// event --> contiene la estructura base de lo que podemos ejecutar por la req, puede tener el body, parametros, query params --> https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html
// context --> información en la cual se esta ejecutando la req --> https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html
const findAll = async (event: APIGatewayProxyEvent, context: Context) => {
    const { name } = JSON.parse(event.body) as { name: string };
    const { awsRequestId } = context;

    return formatJSONResponse({
        message: `Hello ${name}!`,
        awsRequestId,
        // event,
        // context
    })
}

export const main = findAll;