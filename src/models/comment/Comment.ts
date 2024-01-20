import BaseModel from "../base/Base"
import scheam from '../comment/comment.schema.json'



export class Comment extends BaseModel{
    static get tableName(){
        return 'comments'
    }
    
    static get jsonSchema(){
        return scheam
    }

    static relationMapping = {
        
    }
}