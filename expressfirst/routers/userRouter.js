const express=require("express");
const { 
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteAllUser,
    deleteUserByID,
} = require ("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/",getAllUser);//get all users
userRouter.get("/:id",getUserById);//get user by id
userRouter.post("/",createUser);
userRouter.patch("/:id",updateUser);
userRouter.delete("/",deleteAllUser);
userRouter.delete("/:id",deleteUserByID);

module.exports = userRouter;