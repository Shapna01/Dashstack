
import { Pool } from "pg";


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  max: 10,                   
  idleTimeoutMillis: 30000,    
  connectionTimeoutMillis: 5000, 
});


export async function runQuery(query, params = []) {
  try {
    const result = await pool.query(query, params);
    return result;
  } catch (err) {
    console.error("DATABASE ERROR:", err);

    switch (err.code) {
      case "ECONNREFUSED":
        throw new Error("Database is not reachable (ECONNREFUSED)");
      case "ETIMEDOUT":
        throw new Error("Database request timed out");
      case "23505":
        throw new Error("Duplicate record already exists");
      case "42601":
        throw new Error("SQL syntax error — check your query");
      default:
        throw new Error("Database operation failed");
    }
  }
}


export async function testDBConnection() {
  try {
    await pool.query("SELECT 1");
    console.log(" PostgreSQL Connected Successfully");
  } catch (err) {
    console.error(" Failed to connect to PostgreSQL:", err.message);
  }
}

export default pool;