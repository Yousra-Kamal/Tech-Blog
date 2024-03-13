const { BlogPost } = require("../models");

const blogPostData = [
  {
    title: "A Journey to Remember",
    content:
      "Setting foot on foreign soil, I embarked on a journey filled with unexpected encounters and unforgettable experiences. Each step brought me closer to discovering the true essence of adventure.",
    user_id: 1,
  },
  {
    title: "Embracing Change",
    content:
      "Amidst the chaos of life, I found solace in the ever-changing tides of existence. With each passing moment, I embraced the uncertainty, knowing that within change lies the beauty of growth.",
    user_id: 2,
  },
  {
    title: "Finding Serenity in Chaos",
    content:
      "In the midst of a bustling cityscape, I discovered pockets of tranquility hidden within the chaos. Amidst the cacophony of noise, I found solace in the stillness of my own mind.",
    user_id: 3,
  },
  {
    title: "Chasing Dreams",
    content:
      "With determination as my compass, I chased after my dreams with unwavering resolve. Through setbacks and triumphs alike, I remained steadfast in my pursuit of the extraordinary.",
    user_id: 1,
  },
  {
    title: "The Art of Letting Go",
    content:
      "In releasing the burdens of the past, I found freedom in the present moment. With each exhale, I surrendered to the flow of life, allowing serenity to wash over me like a gentle breeze.",
    user_id: 2,
  },
];

const seedBlogPost = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;
