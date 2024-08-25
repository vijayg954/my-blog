import Blog from "../models/blogmodel.js";


export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(200).json({
      success: true,
      message: "blog created successfully",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "blog not created ",
      error: error.message,
    });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      success: true,
      message: "all blog founded successfully",
      blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "blog not found ",
      error: error.message,
    });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      res.status(400).json({
        success: false,
        message: "blog not found ",
      });
    }
    res.status(200).json({
      success: true,
      message: " blog founded successfully",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "blog not found ",
      error: error.message,
    });
  }
};

export const updateBlog = async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id);
    if (!blog) {
      res.status(400).json({
        success: false,
        message: "blog not found ",
      });
    }
    blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      message: " blog updated successfully",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "blog not updated ",
      error: error.message,
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id);
    if (!blog) {
      res.status(400).json({
        success: false,
        message: "blog not found ",
      });
    }
    await blog.deleteOne();
    res.status(200).json({
      success: true,
      message: " blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "blog not deleted ",
      error: error.message,
    });
  }
};
