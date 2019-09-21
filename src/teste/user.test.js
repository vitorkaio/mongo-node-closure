import User from '../controller/user'

export default async function UserTest() {
  let user = {}
  try {
    user = await User()
    const res = await user.getUsers()
    console.log(res)
  } 
  catch (err) {
    console.log(err)
  }
  finally {
    user.close()
  }

}
