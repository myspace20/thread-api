import BaseModel from "../base/Base"
import schema from '../post/post.schema.json'


export class Posts extends BaseModel{
    static get tableName(){
        return 'posts'
    }

    static get jsonSchema(){
        return schema
    }
}