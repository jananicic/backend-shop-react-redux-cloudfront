import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import productsListMock from "../../mocks/productsList.mock.json";
import {formatJSONResponse} from "@libs/api-gateway";
import {mockAsync} from "../../mocks/mockAsync";

export const getProductsById: ValidatedEventAPIGatewayProxyEvent<any> = async (event) => {
  const {productId} = event.pathParameters
  try {
    const item = await mockAsync(productsListMock.find(item => item.id === productId));

    if (!item){
      return formatJSONResponse(404, "Product not found");
    }

    return formatJSONResponse(200, item);
  } catch (e) {
    return formatJSONResponse(500, e);
  }
};

export const main = middyfy(getProductsById);
