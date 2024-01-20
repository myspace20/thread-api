import { Votes } from "../models/vote/Vote";
import { HttpError } from "../util/HttpError";

export class VoteService {
  async getById(id) {
    const vote = await Votes.query().findOne(id);
    if (!vote) throw new HttpError(404,`vote with id ${id} not found`);
    return vote;
  }

  async create(voteData) {
    const vote = await Votes.query().insert(voteData);
    return vote;
  }

  async patch(id, voteData) {
    await this.getById(id);
    const vote = await Votes.query().patch(voteData).where(id);
    return vote;
  }
}
