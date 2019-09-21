const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'faker-closure';
const mongoClient = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

const Mongodb = async () => {
  let client = {}
  let db = {}
  try {
    client = await mongoClient.connect()
    db = client.db(dbName)
  } 
  catch (err) {
    throw(err)
  }

  console.log('\n**** CLOSE ****\n')

  const getDb = () => db
  const close = () => client.close()

  return {
    getDb: getDb,
    close: close
  }
}

export default Mongodb()
