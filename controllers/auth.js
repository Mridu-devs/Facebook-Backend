import { db } from "../connect.js";
import bcrypt from "bcrypt"

export const register = (req, res) => {
  //Check if user exists

  const q = "SELECT FROM users WHERE username = ?"

  db.query(q, [req.body.username],(err,data)=>{
    if(err) return res.status(500).json(err)
    if(data.length) return res.status(409).json("User already exists!")
  })

  // Create a New User
    //Hash the password
};
export const login = (req, res) => {};
export const logout = (req, res) => {};
