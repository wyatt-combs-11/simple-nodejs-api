let client

function createClient () {
  const { MongoClient, ServerApiVersion } = require('mongodb')
  const uri = process.env.CONNECTION_STRING

  // Create a MongoClient
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true
    }
  })
}

async function getMockChartData () {
  let result = ''
  try {
    // Query DB
    await client.connect()
    result = await client
      .db('MockDatabase')
      .collection('MockChartData')
      .findOne({})
  } finally {
    await client.close()
  }
  return result
}

module.exports = { client, createClient, getMockChartData }
