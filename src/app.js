import faker from 'faker'
import mongo from './database/mongodb'
import User from './controller/user'
import userTest from './teste/user.test'

const app = async () => {
  let user = {}
  try {
    user = await User()
    await user.saveUser(faker.name.firstName(), faker.name.lastName(), faker.random.number())
  } 
  catch (err) {
    console.log(err)
  }
  finally {
    user.close()
  }
}

app()
userTest()
