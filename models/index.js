// import models
const User = require("./User");
const BlogPost = require("./BlogPost");
const Comment = require("./Comment");

// User has many BlogPost
User.hasMany(BlogPost, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// User has many Comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// BlogPost belongs to User
BlogPost.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// BlogPost has many Comments
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
