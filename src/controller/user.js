import mongo from '../database/mongodb'

export default async function User() {
  let client = {}
  let db = {}
  try {
    client = await mongo
    db = client.getDb()
  } 
  catch (err) {
    throw(err)  
  }

  const saveUser = async (name, lastName, socialId) => {
    try {
      console.log(name, lastName, socialId)
      await db.collection('user').insertOne({name: name, lastName: lastName, socialId: socialId})
    } catch (err) {
      throw(err)
    }
  }

  const getUsers = async () => {
    try {
      return db.collection('user').find({}).toArray()
    } 
    catch (err) {
      throw(err)  
    }
  }

  const close = () => client.close()

  return {
    saveUser: saveUser,
    getUsers: getUsers,
    close: close
  }
}
