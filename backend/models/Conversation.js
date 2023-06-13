const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
    {
        members: {
            type: Array,
        },
        
    },
{timestamps : true} 
//kullanıcı oluşturulduğunda ufak bir bekleme oluşturma
);

module.exports = mongoose.model("Conversation", ConversationSchema);

