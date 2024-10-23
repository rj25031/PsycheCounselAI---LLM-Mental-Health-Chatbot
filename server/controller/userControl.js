import userModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { Fname, Lname, Email, Password, Mobile, Newsletter } = req.fields;

    const userCheck = await userModel.findOne({ email: Email });
    if (userCheck) {
      console.log("Already logged in");
      return res.status(403).send({
        success: true,
        message: "user uploaded",
      });
    }
 
    const hashedPass = await bcrypt.hash(Password, 10);
    
    const userDB = await userModel.create({
      Fname: Fname,
      Lname: Lname,
      email: Email,
      mobile: Mobile,
      password: hashedPass,
      newsletter: Newsletter,
    });

    return res.status(200).send({
      success: true,
      message: "user uploaded",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: true,
      message: "failed" + error,
    });
  }
};

export const logIn = async (req, res) => {  
  try {
    const { Email, Password, Save } = req.fields;
    const user = await userModel.findOne({ email: Email });

    if (!user) {
      return res.status(404).send({
        success: true,
        message: "user not found",
      });
    }

    const token = await jwt.sign({user}, process.env.secret_key,{expiresIn:'10d'});
     await bcrypt.compare(
      Password,
      user.password,
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(401).send({
            success: false,
            message: "fail",
          });
        }
        if (result) {
          return res.status(200).send({
            success: true,
            message: "login successful",
            token,
          });
        } else {
          return res.status(403).send({
            success: false,
            message: "invalid password",
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "fail " + error,
    });
  }
};