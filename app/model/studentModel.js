var studentList = [{
    sname : "Yashwant",
    smobile: 9834983848,
    semail: "abc@gmail.com",
    scourse:"MERN full stack"
}];

var studentModel = {
    getStudentRecord:function(){
        return new Promise(function(resolve,reject){
            resolve(studentList);
        });
    },

    addNewSingleStudent: function(studentData){
        return new Promise(function(resolve,reject){
            studentList.push(studentData);
            var result = {
                result:'1 record added',
                student_count:studentList.length
            }
            resolve(result);
        });
    }
}

module.exports=studentModel;