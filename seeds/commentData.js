const { Comment } = require("../models");

const commentData = [
  {
    comment_content: "Thanks for sharing!",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_content: "Brilliant idea!",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_content: "Impressive work!",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_content: "Looking forward to trying this out!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_content: "Kudos for the valuable input!",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_content: "This is gold, thank you!",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_content: "Good stuff you know!",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_content: "Thanks for the tip!.",
    user_id: 1,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
