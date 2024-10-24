import userModel from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { Name, Email, Phone, Password, Age, Address } = req.fields;  
    const userCheck = await userModel.findOne({  email : Email });
    if (userCheck) {
      return res.status(403).send({
        success: false,
        message: "User already exists. Please log in.",
      });
    }
    
    const hashedPass = await bcrypt.hash(Password, 10);

    const userDB = await userModel.create({
      name: Name,         
      email: Email,
      phone: Phone,
      password: hashedPass,
      age: Age,
      address: Address,
    });
    return res.status(200).send({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Failed to register user: " + error.message,
    });
  }
};

export const logIn = async (req, res) => {
  try {
    const { Email, Password } = req.fields; 
    console.log(Email);
    
    const user = await userModel.findOne({ email : Email });
    
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    const isPasswordMatch = await bcrypt.compare(Password, user.password);
    if (!isPasswordMatch) {
      return res.status(403).send({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.secret_key, { expiresIn: '10d' });

    return res.status(200).send({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Failed to log in: " + error.message,
    });
  }
};
