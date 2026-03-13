import pool from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return Response.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (name,email,password) VALUES ($1,$2,$3)",
      [name, email, hashedPassword]
    );

    return Response.json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}