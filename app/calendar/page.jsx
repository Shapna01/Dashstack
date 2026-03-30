import { Suspense } from "react";
import CalendarClient from "./CalendarClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CalendarClient />
    </Suspense>
  );
}