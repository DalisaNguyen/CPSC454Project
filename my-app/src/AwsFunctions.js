import * as AWS from 'aws-sdk'

const docClient = new AWS.DynamoDB.DocumentClient()
export const fetchData = (users) => {
  var params = {
    Users: users
  }
  docClient.scan(params, function (err, data) {
    if(!err) {
      console.log(data)
    }
  })
}

export const putData = (users, data) => {
  var params = {
    Users: users,
    Item: data
  }

  docClient.put(params, function (err, data) {
    if (err) {
      console.log('Error', err)
    } else {
      console.log('Success', data)
    }
  })
}
