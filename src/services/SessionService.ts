import { compareSync } from "bcrypt";
import { Session } from "../models/session/Session";
import { User } from "../models/user/User";
import { HttpError } from "../util/HttpError";

const FILTERED_FIELDS = ["password_hash", "created_at", "updated_at"];

export class SessionService {
  static async login(userAgent:string,userCredentials: any) {
    const existingUser = await User.query()
      .where({ email: userCredentials.email })
      .first();
    if (!existingUser) throw new HttpError(409,"user does not exist");
    const validPasswordHash = compareSync(
      userCredentials.password,
      //@ts-ignore
      existingUser.password_hash
    );
    if (!validPasswordHash) throw new HttpError(409,"incorrect email or password");
    //@ts-ignore
    const session = await Session.query().insertAndFetch({
      //@ts-ignore
      user_id: existingUser.id,
      is_valid: true,
      user_agent: userAgent,
    });
    return { existingUser, session };
  }

  static async findSessionById(id: string) {
    const session = await Session.query().findById(id);
    if (!session) throw new HttpError(404,"session not found");
    return session;
  }

  static async inValidateSession(id: string) {
    await this.findSessionById(id);
    const updatedSession = await Session.query()
      .patch({ is_valid: false })
      .where({ id });
    return updatedSession;
  }
}
