import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";

export const handler: APIGatewayProxyHandler =
  async (): Promise<APIGatewayProxyResult> => {
    try {
      const response = {
        statusCode: 200,
        body: "HELLO YOU ARE MY FRIEND!!!",
        anotherValueTest: true,
      };

      return response;
    } catch (err) {
      return {
        statusCode: 500,
        body: "An error occured",
      };
    }
  };
