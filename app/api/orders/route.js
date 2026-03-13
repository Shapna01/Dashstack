import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM orders ORDER BY id ASC");

    return Response.json(result.rows);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Database error" }, { status: 500 });
  }
}
export async function POST(req) {
  try {
    const { name, address, type, status ,price,quantity ,image } = await req.json();

    const result = await pool.query(
      "INSERT INTO orders (name,address,order_date,type,status,price,quantity,image) VALUES ($1,$2,NOW(),$3,$4,$5,$6,$7) RETURNING *",
      [name, address, type, status ,price,quantity,image]
    );

    return Response.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Insert failed" }, { status: 500 });
  }
}
