const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (request, response) => {
  const statement = `select id, e_name, email, password, emp_id, dname, doj from Employee_Tb`
  db.query(statement, (error, data) => {
    if (error) {
      response.send('error')
    } else {
      response.send(data)
    }
  })
})

module.exports = router
