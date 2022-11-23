import joi from 'joi'
export const movieValidation=async(req,res,next)=>{
    const movieSchema=joi.object({
        name:joi.string().required(),
        description:joi.string().required(),
        duration:joi.number().required(),
        rating:joi.number().required(),
        category_id:joi.required().required(),
    }).options({allowUnknown:true});
    const value=await movieSchema.validate(req.body);
    if(value.error){
        res.status(400).json({
            message:value.error.details[0].message.replace(/["'`]+/g, ""),
        });
    }else{
        next()
    }
}