const bcrypt = require ('bcrypt')

module.exports = {

  register: async (req, res) => {
    const db = req.app.get('db')
    const {user_name, password} = req.body

    const existingUser = await db.check_user(user_name)

    if(existingUser[0]){
      return res.status(409).send('user already exists')
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const newUser = await db.register_user([user_name, hash])

    req.session.user = {
      userId: newUser[0].user_id,
      user_name: newUser[0].user_name
    }
    res.status(200).send(req.session.user)

  },
  
  login: async (req, res) => {
    const db = req.app.get('db')
    const {user_name, password} = req.body

    const user = await db.check_user(user_name)
    if(!user[0]){
      return res.status(404).send('user does not exist yet')
    } else {
      const authenticated = bcrypt.compareSync(password, user[0].password)
      if(authenticated){
        req.session.user = {
          userId: user[0].userId,
          user_name: user[0].user_name
        }
        res.status(200).send(req.session.user)
      } else {
        res.status(403).send('user_name or password is incorrect')
      }
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200)
  },

  getUser: (req, res) => {
    if(req.session.user) {
      res.status(200).send(req.session.user)
    } else {
      res.sendStatus(404)
    }
  },
 
}