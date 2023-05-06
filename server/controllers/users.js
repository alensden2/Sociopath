import User from "../models/User.js";

/**Read */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(400).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getUserFriends = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  // transforming all the friends id to the friends objs containing all their information
  const friends = await Promise.all(
    user.friends.map((id) => User.findById(id))
  );

  // now formatting it for the front end
  const formattedFriends = friends.map(
    ({ _id, firstName, lastName, occupation, location, picturePath }) => {
      return { _id, firstName, lastName, occupation, location, picturePath };
    }
  );
  res.status(200).json(formattedFriends);
};

/** Update */

export const addRemoveFriends = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = User.findById(id);
    const friend = User.findById(friendId);

    // if the friend is present delete them
    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => {
        id !== friendId;
      });

      friend.friends = friend.friends.filter((id) => {
        id !== id;
      });
    }

    // if the friend id is not present add it
    else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }

    await user.save();
    await friend.save();

    const friends = await Promise.all((id) => {
      User.findById(id);
    });

    const formattedFriend = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );

    res.status(200).json(formattedFriend);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
