import pool from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    console.log("Incoming:", email, password);

    const result = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    console.log("DB result:", result.rows);

    if (result.rows.length === 0) {
      return Response.json({ message: "User not found" }, { status: 400 });
    }

    const user = result.rows[0];

    console.log("Stored hash:", user.password);

    const validPassword = await bcrypt.compare(password, user.password);

    console.log("Password match:", validPassword);

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
    console.error("LOGIN ERROR:", error); 
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}