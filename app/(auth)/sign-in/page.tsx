
// import AuthForm from "@/components/AuthForm";

// const Page = () => {
//   return <AuthForm type="sign-in" />;
// };

// export default Page;

import { auth } from "@/firebase/admin";
import { redirect } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import { cookies } from "next/headers";

const Page = async () => {
  const cookieStore = await cookies(); // ✅ Await cookies() now
  const session = cookieStore.get("session")?.value;

  if (session) {
    try {
      await auth.verifySessionCookie(session, true);
      redirect("/"); // ✅ Already authenticated
    } catch (error) {
      // invalid or expired session — allow sign-in
    }
  }

  return <AuthForm type="sign-in" />;
};

export default Page;
