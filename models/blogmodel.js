// import mongoose from "mongoose";

// const blogSchema = new mongoose.Schema({
//   title: String,
//   category:String,
//   description: String,
//     timestamps: true,

// });

// const Blog = mongoose.model("Blog", blogSchema);
// export default Blog;


import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    description: String,
  },
  {
    timestamps: true, // Correctly placed within the schema options
  }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
