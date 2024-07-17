"use server";

import { cookies } from "next/headers";

export async function toggleSidebar() {
  const currentState = cookies().get("isSidebarEnabled")?.value === "true";
  cookies().set("isSidebarEnabled", (!currentState).toString());
  return !currentState;
}
