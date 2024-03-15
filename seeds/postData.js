const { Post } = require("../models");

const postdata = [
  {
    title: "Keyboard Shortcuts",
    content:
      "Discover the power of keyboard shortcuts to enhance productivity. From Ctrl+S to save your work to Ctrl+Z to undo, these shortcuts are invaluable.",

    user_id: 1,
  },
  {
    title: "Battery Life Hacks",
    content:
      "Extend your device's battery life with practical tips. Adjust screen brightness, disable background apps, and optimize settings for longevity.",
    user_id: 2,
  },
  {
    title: "Storage Optimization",
    content:
      "Maximize your computer's storage space with effective techniques. Learn to declutter, delete temporary files, transfer data, and utilize cloud storage.",
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
