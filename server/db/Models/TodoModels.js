const {model, Schema} = require ('mongoose')

const TodoSchema = new Schema ({
  text:String,
  status:{
    type:Boolean,
    default:false,
  }
})

const TodoModel = model('Todo', TodoSchema)
module.exports = TodoModel
