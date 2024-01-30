import { Votes } from "../models/vote/Vote";
import { HttpError } from "../util/HttpError";

export class VoteService {
  async getById(id) {
    const vote = await Votes.query().findOne(id);
    if (!vote) throw new HttpError(404, `vote with id ${id} not found`);
    return vote;
  }

  /*A get all for votes might not be 
  necessary since there exist a relation 
  between posts and votes. All posts will be fetched with 
  their corresponding votes along with the types.
  */

  // async get() {
  //   const votes = await Votes.query();
  //   return votes;
  // }

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
