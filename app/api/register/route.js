
import pool from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    
    let body;

    try {
      body = await req.json();
    } catch (err) {
      return Response.json(
        { error: "Invalid JSON format" },
        { status: 400 }
      );
    }

    const { name, email, password } = body;

   
    if (!name || !email || !password) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return Response.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return Response.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

   
    let existingUser;

    try {
      existingUser = await pool.query(
        "SELECT * FROM users WHERE email=$1",
        [email]
      );
    } catch (err) {
      console.error("DB ERROR (SELECT):", err);
      return Response.json(
        { error: "Database error" },
        { status: 500 }
      );
    }

    if (existingUser.rows.length > 0) {
      return Response.json(
        { error: "User already exists" },
        { status: 409 } 
      );
    }

    let hashedPassword;

    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      console.error("BCRYPT ERROR:", err);
      return Response.json(
        { error: "Error processing password" },
        { status: 500 }
      );
    }


    try {
      await pool.query(
        "INSERT INTO users (name,email,password) VALUES ($1,$2,$3)",
        [name, email, hashedPassword]
      );
    } catch (err) {
      console.error("DB ERROR (INSERT):", err);

      if (err.code === "23505") {
        return Response.json(
          { error: "User already exists" },
          { status: 409 }
        );
      }

      return Response.json(
        { error: "Failed to register user" },
        { status: 500 }
      );
    }

   
    return Response.json(
      { message: "User registered successfully" },
      { status: 201 }
    );

  } catch (error) {
    console.error("REGISTER ERROR (UNHANDLED):", error);

    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}