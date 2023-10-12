import userModel from "../models/userModel.js";
import { comparePasscode, hashpassword } from "../utils/authUtils.js";
import JWT from "jsonwebtoken";
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer } = req.body;
    if (!name) {
      return res.send({ message: "Name is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "PAssword is required" });
    }
    if (!phone) {
      return res.send({ message: "Phone is required" });
    }
    if (!address) {
      return res.send({ message: "Address is required" });
    }
    if (!answer) {
      return res.send({ message: "Answer is required" });
    }

    const existingUSer = await userModel.findOne({ email });

    if (existingUSer) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }

    const hashedPass = await hashpassword(password);

    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPass,
      answer,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Sucessfully",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      err,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }

    const match = await comparePasscode(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password brother",
      });
    }

    // token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SEC, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successs",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      err,
    });
  }
};

export const forgotController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email) {
      res.status(400).send({ message: "Email is Required" });
    }
    if (!answer) {
      res.status(400).send({ message: "Answer is Required" });
    }
    if (!newPassword) {
      res.status(400).send({ message: "NewPassword is Required" });
    }

    const user = await userModel.findOne({ email, answer });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email Or Answer",
      });
    }

    const hashed = await hashpassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (eer) {
    console.log(eer);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      eer,
    });
  }
};
export const testController = (req, res) => {
  try {
    res.send("protected Route");
  } catch (eer) {
    console.log(eer);
    res.send(eer);
  }
};
