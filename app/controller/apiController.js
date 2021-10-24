const studentModel = require("../model/studentModel");

var studentList = [{
    sname : "Yashwant",
    smobile: 9834983848,
    semail: "abc@gmail.com",
    scourse:"MERN full stack"
}];
const apiController = {
    apiHome: function(req,res){
        res.send({status:true});
    },
    // getStudentList: function(req,res){
    //     res.send({status:true,result:studentList});
    // },
    // saveNewStudent: function(req,res){
    //     var data=req.body;
    //     studentList.push(data);
    //     res.send({
    //         status:true,
    //         result:'1 record inserted',
    //         student_count:studentList.length
    //     });
    // }

    getStudentList:async function(req,res){
        try{
            var result= await studentModel.getStudentRecord();
            res.send({status:true,data:result});
        }
        catch(error){
            res.status(502).send({status:false,data:error});
        }
    },
    saveNewStudent: async function(req,res){
        var data = req.body;
        try{
            var result = await studentModel.addNewSingleStudent(data);
            res.send({
                status:true,
                // result:result
                ...result
            });
        }
        catch(error){
            res.status(502).send({status:false,data:error});
        }
    }
};

module.exports = apiController;