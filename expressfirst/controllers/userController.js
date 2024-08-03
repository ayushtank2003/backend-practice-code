let userDB=[]
const{bad_request,
    success,
    not_found,
    server_error,
    created
}=require("../utils/constants")

exports.getAllUser=(req,res)=>{
    res.status(success).json({
        status:"success",
        count:userDB.length,
        data:userDB,
    });
};

exports.getUserById=(req,res)=>{
    const id = req.params.id;
    for(let i=0;i<userDB.length;i++){
        if(userDB[i].username==id){
            res.status(success).json({
                status:"success",
                data:userDB[i],
            });
            return;
        }
    }

    res.status(not_found).json({
        status:"failure",
        message:`User with id ${id} not found`,
    });
};

exports.createUser=(req,res)=>{
    let{email,username,phone,password}=req.body; //object restructuring 
    if(email==undefined || 
        username==undefined || 
        phone==undefined ||
        password==undefined
    ){
        res.status(bad_request).json({
            status:"faliure",
            message:"please provide correct infrmation",
        });
        return;
    }

    let user={
        email,
        username,
        phone,
        password,
    };
    userDB.push(user);
    res.status(created).json({
        status:"success",
        data:user,
    });
    return;
};

exports.updateUser=(req,res)=>{
    const id = req.params.id;
    const {email,username,phone,password}=req.body;

    for (let i=0;i<userDB.length;i++){
        if(userDB[i].username==id){
            if(email)userDB[i].email=email;
            if (phone)userDB[i].phone=phone;
            if(password)userDB[i].password=password;
            res.status(success).json({
                status:"success",
                data:userDB[i],
            });
            return
        }
    }
    res.status(not_found).json({
        status:"failure",
        message:`user with id ${id} not found`,
    });


};

exports.deleteAllUser=(req,res)=>{
    userDB=[];
    res.status(success).json({
        status:"success",
        message:"all users deleted successfully",
    })

};

exports.deleteUserByID=(req,res)=>{
    const id=req.params.id;
    for(let i =0;i<userDB.length;i++){
        if(userDB[i].username==id){
            userDB.splice(i,1);
            res.status(success).json({
                status:"success",
                message:`user with id ${id} deleted successfully`,
            });
            return;
        }
    }
    res.status(not_found).json({
        status:"failed",
        message:`user with id ${id} not found`,
    });

};