// module.exports.actionName = function(req,res){}
module.exports.home = function(req,res){
    return res.render('home',{
        title:"TODO List",
        task_list: taskList
    });
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