import { runQuery } from "@/lib/db";

export async function GET() {
  try {
    const result = await runQuery("SELECT * FROM orders ORDER BY id ASC");

    if (!result || !result.rows) {
      return Response.json({ error: "Unexpected database response" }, { status: 500 });
    }

    return Response.json(result.rows, { status: 200 });
  } catch (error) {
    console.error("ORDERS GET ERROR:", error);
    return Response.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    let body;

    try {
      body = await req.json();
    } catch {
      return Response.json({ error: "Invalid JSON format" }, { status: 400 });
    }

    const { name, address, type, status, price, quantity, image } = body;

    if (!name || !address || !type || !status) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    let result;

    try {
      result = await runQuery(
        `INSERT INTO orders 
          (name, address, order_date, type, status, price, quantity, image)
         VALUES ($1, $2, NOW(), $3, $4, $5, $6, $7)
         RETURNING *`,
        [name, address, type, status, price, quantity, image]
      );
    } catch (dbError) {
      console.error("ORDERS POST DB ERROR:", dbError);
      return Response.json({ error: "Database insert failed" }, { status: 500 });
    }

    if (!result || !result.rows || result.rows.length === 0) {
      return Response.json({ error: "Order could not be created" }, { status: 500 });
    }

    return Response.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error("ORDERS POST ERROR:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}