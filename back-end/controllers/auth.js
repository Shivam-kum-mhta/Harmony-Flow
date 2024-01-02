import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Student from "../models/Student.js";
import Employee from "../models/Employee.js";

export const register = async (req, res) => {
  try {
    const { name, email, id, department, program, password, role } = req.body;
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    if (role === "Student") {
      const student = new Student({
        Name: name,
        Email: email,
        Roll_Number: id,
        Department: department,
        Program_Type: program,
        Password: hash,
      });
      const savedUser = await student.save();
      res.status(201).json(savedUser._doc);
    } else {
      const employee = new Employee({
        Name: name,
        Email: email,
        Department: department,
        Staff_ID: id,
        Role: role,
        Password: hash,
      });
      const savedEmployee = await employee.save();
      res.status(201).json(savedEmployee._doc);
    }
  } catch (error) {
    console.log(`${error}: There has been an error in registering the user!`);
    res.status(500).json({ error });
  }
};

export const login = async function (req, res) {
  try {
    const { ID, Password, Role } = req.body;
    let User = null;
    if (Role === "Student") {
      const student = await Student.findOne({ Roll_Number: ID });
      if (!student) {
        res.status(400).json({ message: "This user does not exist!" });
      }
      User = student;
    } else {
      const employee = await Employee.findOne({ Staff_ID: ID });
      if (!employee) {
        res.status(400).json({ message: "This user does not exist!" });
      }
      User = employee;
    }
    const status = await bcrypt.compare(Password, User.Password);
    if (!status) {
      // User has entered the wrong credentials. Therefore, we end the response here only.
      res
        .status(401)
        .json({ Invalid: req.body, message: "Invalid Credentials!" });
    } else {
      // User has entered the right credentials. Therefore, we provide JWT Tokens in order to authenticate.
      delete User.Password;
      delete User._doc.Password;
      const accessToken = jwt.sign(
        { id: User.id },
        process.env.JWT_ACCESS_SECRET,
        {
          expiresIn: "10m",
        }
      );

      const refreshToken = jwt.sign(
        { id: User.id },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: "1d" }
      );
      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.status(200).json({ accessToken });
    }
  } catch (error) {
    console.log(`${error}`);
    res.status(500).json({ error });
  }
};

export const verifyToken = function (req, res) {
  const accessToken = req.headers["authorization"].split(" ")[1];
  const refreshToken = req.cookies.jwt;
  if (!accessToken) {
    res.status(401).json({ message: "No Access Token has been sent!" });
  } else {
    jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
  }
};
