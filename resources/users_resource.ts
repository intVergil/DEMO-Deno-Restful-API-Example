import { Drash } from "../deps.ts";
import { UserModel } from "../models/user_model.ts";

export default class UserResource extends Drash.Http.Resource {
  static paths = ["/user"];

  public async GET() {
    const res = await UserModel.find();
    this.response.body = res;
    return this.response;
  }

  public async POST() {
    // Gather data
    const username = this.request.getBodyParam("username") || "";
    const password = this.request.getBodyParam("password") || "";
    const res = await UserModel.create({ username, password });
    this.response.body = res;
    return this.response;
  }

  public async DELETE() {
    // Gather data
    const userId = this.request.getBodyParam("userId") || "";
    const res = await UserModel.delete(userId);
    this.response.body = res;
    return this.response;
  }

  public PUT() {
    this.response.body = JSON.stringify({ message: "Not implemented" });
    return this.response;
  }
}
