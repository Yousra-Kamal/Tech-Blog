// import models
const User = require("./User");
const BlogPost = require("./BlogPost");
const Comment = require("./Comment");

// User has many Post
User.hasMany(BlogPost, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// User has many Comment
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// BlogPost belongs to User
BlogPost.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// BlogPost has many Comment
BlogPost.hasMany(Comment, {
  foreignKey: "blgPost_id",
  onDelete: "CASCADE",
});

// Comment belongs to BlogPost
Comment.belongsTo(BlogPost, {
  foreignKey: "blgPost_id",
});

// Comment belongs to User
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  Comment,
  BlogPost,
};
