export function apiHandler(handler) {
  return async (req) => {
    try {
      const data = await handler(req);
      return Response.json(data, { status: 200 });
    } catch (err) {
      console.error("API ERROR:", err.message);

      return Response.json(
        { error: err.message || "Internal Server Error" },
        { status: 500 }
      );
    }
  };
}