import { BaseModel } from "./basic_model.ts";

// Defining schema interface
interface UserSchema {
  _id: { $oid: string };
  username: string;
  password: string;
}

interface UserInput {
  username: string;
  password: string;
}

const usersCollection = BaseModel.database.collection<UserSchema>("users");

class UserModel extends BaseModel {
  static async find(params?: any) {
    try {
      const clauses = BaseModel.formatQueryWithId(params);
      const users = await usersCollection.find(clauses);
      return { data: { users } };
    } catch (error) {
      return { error };
    }
  }
  static async findOneById(id: string) {
    try {
      const objId = BaseModel.formatObjectId(id);
      const user = await usersCollection.findOne(objId);
      return { data: { user } };
    } catch (error) {
      return { error };
    }
  }
  static async create(params: UserInput) {
    try {
      if (!params?.username || !params?.password) throw "名称和密码不能为空";
      const user = await usersCollection.findOne({ username: params.username });
      if (user) throw "名称已存在";
      const { $oid } = await usersCollection.insertOne(params);
      return { data: { createdUser: $oid } };
    } catch (error) {
      return { error };
    }
  }
  static async delete(id: string) {
    try {
      const objId = BaseModel.formatObjectId(id);
      const deleteCount = await usersCollection.deleteOne(objId);
      if (!(deleteCount > 0)) {
        throw "删除失败，未找到目标用户.";
      }
      return { data: { deletedUser: id } };
    } catch (error) {
      return { error };
    }
  }
}

export { UserModel };
