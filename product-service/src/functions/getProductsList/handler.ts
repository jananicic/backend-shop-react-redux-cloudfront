import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import productsListMock from "../../mocks/productsList.mock.json";
import {formatJSONResponse} from "@libs/api-gateway";
import {mockAsync} from "../../mocks/mockAsync";

export const getProductsList: ValidatedEventAPIGatewayProxyEvent<any> = async () => {
  try {
    const items = await mockAsync(productsListMock);

    return formatJSONResponse(200, items);
  } catch (e) {
    return formatJSONResponse(500, e);
  }
};

export const main = middyfy(getProductsList);
