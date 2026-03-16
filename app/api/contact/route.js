import { writeFile } from "fs/promises";
import path from "path";
import pool from "@/lib/db";

export async function POST(req) {

  const data = await req.formData();

  const firstName = data.get("firstName");
  const lastName = data.get("lastName");
  const email = data.get("email");
  const phone = data.get("phone");
  const dob = data.get("dob");
  const gender = data.get("gender");
  const photo = data.get("photo");

  let photoPath = "";

  if (photo && photo.name) {

    const bytes = await photo.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = Date.now() + "_" + photo.name;

    const uploadPath = path.join(
      process.cwd(),
      "public/uploads",
      fileName
    );

    await writeFile(uploadPath, buffer);

    photoPath = "/uploads/" + fileName;
  }


  await pool.query(
    `INSERT INTO contact
    (first_name, last_name, email, phone, dob, gender, photo)
    VALUES ($1,$2,$3,$4,$5,$6,$7)`,
    [firstName, lastName, email, phone, dob, gender, photoPath]
  );

  return Response.json({
    success: true
  });

}