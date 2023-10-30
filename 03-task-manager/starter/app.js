
const express = require('express');
const app = express()
const port = 3000
const task = require('./router/tasks')

//route

app.get('/hello', (req,res) => {
    res.send('Task Manage App')
})
app.use('')

app.use('./api/v1/tasks', task)

//app.get('/api/v1/tasks')             -Gett all task
//app.post('/api/v1/tasks')            -Create a new task
//app.get('/api/v1/tasks/:id')             -Gett single task
//app.patch('/api/v1/tasks/:id')             -Update task
//app.delete('/api/v1/tasks/:id')             -delete task

app.listen(port,() =>{
    console.log('server is listeaning port 3000')
})
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router
