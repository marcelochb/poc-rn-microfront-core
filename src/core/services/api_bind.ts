/* istanbul ignore file */
import { container } from "tsyringe"
import { CoreConstants } from "../constants";
import { FetchApiClient } from "./fetch_api_client";

export const apiDependences = () => {
  container.register(CoreConstants.IApiClient,{useValue: new FetchApiClient()});
}