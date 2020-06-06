module.exports = {
  searchPost: (req, res) => {},

  createPost: (req, res) => {
    const {post_id, user_id, content, user_name, profile_img} = req.body 
    const db = req.app.get('db')

    db.join_users_posts([post_id, user_id, content, user_name, profile_img])
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send('err with create post', err))

  },
  getAllPosts: (req, res) => {},
  getTheirPosts: (req, res) => {},
  updatePost: (req, res) => {},
  deletePost: (req, res) => {},
}