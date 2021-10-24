const JOI =require("joi");
var JOIValidation = {
    saveNewStudentValidation : function(req,res,next){
        let data = req.body;

        let schema = JOI.object({
            sname: JOI.string().min(3).required(),
            smobile: JOI.number().min(10).required(),
            semail:JOI.string().email().required(),
            scourse:JOI.string().min(4).required()
        });

        let validationResult = schema.validate(data);
        
        if(validationResult.error){
            var result={
                status:false,
                message:validationResult.error.message
            };
            res.send(result);
            return false;
        }
        else{
            // res.send(data);
            next();
        }
    }
};

module.exports = JOIValidation;