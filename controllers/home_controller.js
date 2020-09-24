// module.exports.actionName = function(req,res){}
module.exports.home = function(req,res){
    return res.render('home',{
        title:"TODO List",
        task_list: taskList
    });
}

module.exports.addNewTask = function(req,res){
	// console.log(req.body);
	taskList.push(req.body);
	return res.redirect('/');
}

module.exports.delete = function(req,res){
	let task = req.query.newTask;
	
	let taskIndex = taskList.findIndex(i => i.newTask == task);

	if(taskIndex!=-1){
		taskList.splice(taskIndex,1);
	}
	return res.redirect('back');
}

var taskList = [
	{
		newTask:"Get Job",
		category:"Work",
		dueDate: "03-03-2021"
	},
	{
		newTask:"EECT TEST",
		category:"Personal",
		dueDate: "03-11-2020"
	},
	{
		newTask:"Buy Apples",
		category:"Shopping",
		dueDate: "25-09-2020"
	}
];