import Post from "../models/Post.js";
import User from "../models/User.js";

/** Create Post */
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.userPicturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    // getting all the posts with the new one added
    const post = await Post.find();
    res.status(201).json(post);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

/** Get Feed Posts */
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

/** get user specific posts */
export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Post.find({ userId });
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

/** like/unlike posts */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);
    // if the user has liked the post the isLiked has a value

    if (isLiked) {
      // if the user had liked and is pressing the like again, they are removed from the map of likes
      post.likes.delete(user);
      // they hence unlike the post
    }

    else {
        post.likes.set(userId, true) // the mongoDB Data type is map of bool
    }

    // updating the performed action
    const updatedPosts = await Post.findByIdAndUpdate(
        id,
        {
            likes : post.likes
        },
        {new : true}
    );

    res.status(200).json(pos)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
