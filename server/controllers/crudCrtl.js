module.exports = {
  searchPost: (req, res) => {},

  createPost: async (req, res) => {
    const { user_id } = req.session.user;
    // const { profile_img } = req.body;
    // const { post_id } = req.session;
    const { content } = req.body;
    const newPost = await req.app.get('db').add_post([user_id, content]); //note something wrong with the users_id says it

    return res.status(200).send(newPost);
  },
  getAllPosts: async(req, res) => {
    const allPosts = await req.app.get('db').get_all_posts();
    return res.status(200).send(allPosts)

  },

  getOnePost: async (req, res) => {
    const userPost = await req.app.get('db').get_one_post([req.session.posts.post_id])
    return res.status(200).send(userPost)

  },

  updatePost: (req, res) => {
    const {post_id} = req.session;
    const {content} = req.body;
    const db = req.app.get('db');

    db.edit_post(post_id, content)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err))

  },

  deletePost: (req, res) => {
    const {id} = req.params
    const db = req.app.get('db')

    db.delete_post(id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send('err in delete ctrl', err))

  },
}