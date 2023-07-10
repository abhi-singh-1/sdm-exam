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

//POST = INSERT INTO DB
appForEmps.post("/", (request, response)=>{
  

  var query = 
  `insert into Employee values(${request.body.id}, '${request.body.e_name}','${request.body.email}','${request.body.password}','${request.body.emp_id}','${request.body.dname}','${request.body.doj}')`;

  connection.query(query, (error, result)=>{
      if(error==null)
      {
          var data = JSON.stringify(result) 
          response.setHeader("Content-Type","application/json");
          response.write(data);
      } 
      else
      {
          console.log(error);
          response.setHeader("Content-Type","application/json");
          response.write(error)
      }
      response.end();
})
})

//PUT = UPDATE INTO DB
appForEmps.put("/:ENo", (request, response)=>{
  //response.send("EMPS PUT IS CALLED");
  var query = 
  `update Employee set e_name = ${request.body.id}, '${request.body.e_name}','${request.body.email}','${request.body.password}','${request.body.emp_id}','${request.body.dname}','${request.body.doj}')`;

  connection.query(query, (error, result)=>{
                      if(error==null)
                      {
                          var data = JSON.stringify(result) 
                          response.setHeader("Content-Type","application/json");
                          response.write(data);
                      } 
                      else
                      {
                          console.log(error);
                          response.setHeader("Content-Type","application/json");
                          response.write(error)
                      }
                      response.end();
              })
})

//DELETE  = DELETE FROM DB
appForEmps.delete("/:id", (request, response)=>{
  // response.send("EMPS DELETE IS CALLED");
  var query = 
  `delete from Employee where id = ${request.params.id}`;
                  
  connection.query(query, (error, result)=>{
                      if(error==null)
                      {
                          var data = JSON.stringify(result) 
                          response.setHeader("Content-Type","application/json");
                          response.write(data);
                      } 
                      else
                      {
                          console.log(error);
                          response.setHeader("Content-Type","application/json");
                          response.write(error)
                      }
                      response.end();
              })
})


module.exports = router
