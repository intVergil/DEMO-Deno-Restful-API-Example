import { MongoClient, ObjectId } from "../deps.ts";
import { AppConfig } from "../config.ts";

const client = new MongoClient();
await client.connectWithUri(AppConfig.MONGODB_URL);
const db = await client.database("deno");

abstract class BaseModel {
  public static database = db;

  //转化id
  static formatObjectId(id: string) {
    return { _id: ObjectId(id) };
  }

  //转化传值
  static formatQueryWithId(fields: { [key: string]: any }) {
    let clauses: { [key: string]: any } = {};
    for (let key in fields) {
      if (key === "_id") {
        clauses[key] = ObjectId(fields[key]);
      } else {
        clauses[key] = fields[key];
      }
    }
    return clauses;
  }
}

export { BaseModel };
