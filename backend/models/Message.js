const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
    {
        conversationId: {
            type: String,
        },
        sender: {
            type: String,
        },
        text: {
            type: String,
        },
},
{ timestamps : true } 
//kullanıcı oluşturulduğunda ufak bir bekleme oluşturma
);

module.exports = mongoose.model("Message",MessageSchema);

