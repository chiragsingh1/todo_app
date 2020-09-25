// module.exports.actionName = function(req,res){}\
const Task = require("../models/task");

module.exports.home = function(req,res){
	//Fetching data from DB
	Task.find({},function (err,taskList) {
		if(err){
			console.log('Error in fetching Tasks from DB.');
			return;
		}
		return res.render('home',{
			title:"TODO List",
			task_list: taskList
		});

	});
}

module.exports.addNewTask = function(req,res){
	// console.log(req.body);
	// taskList.push(req.body);
	// return res.redirect('/');

	// Adding new Task using DB
	Task.create({
		newTask : req.body.newTask,
		category : req.body.category,
		dueDate : req.body.dueDate
	},function(err,newTaskInDB){
		if(err){
			console.log('Error in adding a new task in the DB');
			return;
		}
		console.log('*****',newTaskInDB);
		return res.redirect('back');
	}); 
}

// Deleting a Task from DB
module.exports.delete = function(req,res){
	// get the id of the task from query in url
	let id = req.query.id;
	// find the field with the id in the db and delete
	Task.findByIdAndDelete(id,function(err){
		if(err){
			console.log('Error in deleting the task in db');
			return;
		}
		return res.redirect('back');
	});

}

// var taskList = [
// 	{
// 		newTask:"Get Job",
// 		category:"Work",
// 		dueDate: "03-03-2021"
// 	},
// 	{
// 		newTask:"EECT TEST",
// 		category:"Personal",
// 		dueDate: "03-11-2020"
// 	},
// 	{
// 		newTask:"Buy Apples",
// 		category:"Shopping",
// 		dueDate: "25-09-2020"
// 	}
// ];