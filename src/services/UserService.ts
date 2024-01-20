import { User } from "../models/user/User";
import { HttpError } from "../util/HttpError";

export class UserService {
  static async signUp(userObject) {
    const userExist = await User.query().where("email", userObject.email);
    if (userExist.length) throw new HttpError(409,"user with such credentials exists");
    const hash = await User.encryptPassword(userObject.password);
    delete userObject.password;
    const userInsertObject = { ...userObject, password_hash: hash };
    const newUserRecord = await User.query().insert(userInsertObject);
    return newUserRecord;
  }

  static async getUserById(id: string) {
    const user = await User.query().findById(id);
    if (!user) throw new HttpError(404,"user not found");
    return user;
  }

  static async findUserByEmail(email: string) {
    const user = await User.query().findOne({ email });
    if (!user) throw new HttpError(404,`user with ${email} does not exist`);
    return user;
  }
}
