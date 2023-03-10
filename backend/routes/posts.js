const Post = require("../models/Post");

const router = require("express").Router();

 
//create post
router.post("/",async( req, res)=> {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch(err){
        res.status(500).json(err)
    }
})

//update post
router.put("/:id",async(req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set: req.body});
            res.status(200).json("the post has been updated")
        }else{
        res.status(403).json("you can update only your post")
        }
    }catch(err){
        res.status(500).json(err);
    }
})


//delete post
router.delete("/:id",async(req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("the post has been deleted")
        }else{
        res.status(403).json("you can delete only your post")
        }
    }catch(err){
        res.status(500).json(err);
    }
})

//like dislike post
router.put("/:id/like", async(res,req)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({ $push: { likes: req.body.userId} });
            res.status(200).json("The post has been liked");
        }else{
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("The post has been disliked");
        }
    }catch(err){
        res.status(500).json(err);
    }
});
 


//get post

//get timeline posts


module.exports = router;