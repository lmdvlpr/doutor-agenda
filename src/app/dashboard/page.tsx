import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import SignOutButton from "./components/sign-out-button";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { usersToClinicsTable } from "@/db/schema";

const DashboardPage = async () => {
   const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/authentication");
  }

  const clinics = await db.query.usersToClinicsTable.findMany({
    where: eq(usersToClinicsTable.userId, session.user.id),
    with: {
      clinic: true,
    },
  });
  if (clinics.length === 0) {
    redirect("/clinic-form");
  }

  return ( <div>
    <h1>Dashboard</h1>
    <h2>{session?.user?.name}</h2>
    <p>{session?.user?.email}</p>
     <SignOutButton />
  </div> );
}

export default DashboardPage;