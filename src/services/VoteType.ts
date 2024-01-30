import { VoteType } from "../models/vote_type/VoteType";
import { HttpError } from "../util/HttpError";

export class VoteTypeService {
  async getById(id) {
    const voteType = await VoteType.query().findOne(id);
    if (!voteType)
      throw new HttpError(404, `vote type with id ${id} not found`);
    return voteType;
  }

  async get() {
    const voteTypes = await VoteType.query();
    return voteTypes;
  }

  async create(voteTypeData) {
    const voteType = await VoteType.query().insert(voteTypeData);
    return voteType;
  }

  async patch(id, voteTypeData) {
    await this.getById(id);
    const voteType = await VoteType.query().patch(voteTypeData).where(id);
    return voteType;
  }

  async delete(id) {
    await this.getById(id);
    const voteType = await VoteType.query().deleteById(id);
    return voteType;
  }
}
