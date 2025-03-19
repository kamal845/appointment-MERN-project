const mongoose=require("mongoose");
const doctorFormSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true,
    },
    qualification:{
        type:String,
        enum:['MBBS','BDS','BAMS','BHMS','BUMS','MD','MS','MDS','MSc','PhD'],
        required:true
    },
    specialization:{
        type:String,
        enum:['Cardiologist','Dermatologist','Endocrinologist','Gastroenterologist','Gynecologist','Hematologist','Nephrologist','Neurologist','Oncologist','Ophthalmologist','Orthopedist','Otolaryngologist','Pediatrician','Physiatrist','Psychiatrist','Pulmonologist','Radiologist','Rheumatologist','Urologist, Entdoctor'],
        required:true
    }
},{timestamps:true});
module.exports=mongoose.model("doctorForm",doctorFormSchema);