import User from '../../../models/user'

export default async function handler(req, res) {
  console.log('[get user(s)]: Handler start');
  try {
    if (!req.query.ids) {
      const users = await User.find();
      return res.send(users)
    }
    const ids = req.query.ids.split(',');
    const user = await User.find({ _id: ids });
    return res.send(user)
  } catch (error) {
    res.status(404).send(`[get users by id]: ${error}`)
  }
}
