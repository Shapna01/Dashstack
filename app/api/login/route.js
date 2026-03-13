import pool from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const result = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    if (result.rows.length === 0) {
      return Response.json({ message: "User not found" }, { status: 400 });
    }

    const user = result.rows[0];

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return Response.json({ message: "Invalid password" }, { status: 400 });
    }

    const token = jwt.sign(
      { userId: user.id },
      "SECRET_KEY",
      { expiresIn: "1d" }
    );

    return Response.json({
      message: "Login successful",
      token,
    });

  } catch (error) {
    console.log(error);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}