import User from '../../../models/user'

export default async function handler(req, res) {
  console.log('[get user by id]: Handler start');
  try {
    const user = await User.findOne({ _id: req.query.id })
    res.send(user)
  } catch (error) {
    res.status(404).send(`[get user by id]: ${error}`)
  }
}
