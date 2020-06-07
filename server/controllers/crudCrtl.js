module.exports = {
  searchPost: (req, res) => {},

  createPost: async (req, res) => {
    const { content } = req.body;
    const { users_id } = req.session.user;
    const newPost = await req.app.get('db').add_post([content, users_id]); //note something wrong with the users_id says it
    return res.status(200).send(newPost);
  },
  getAllPosts: async(req, res) => {
    const allPosts = await req.app.get('db').get_all_posts();
    return res.status(200).send(allPosts)

  },

  getTheirPosts: (req, res) => {},
  updatePost: (req, res) => {},
  deletePost: (req, res) => {},
}