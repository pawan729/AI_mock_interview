import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Please sign in to generate an interview.</p>
      </div>
    );
  }

  return (
    <>
      <h3 className="text-2xl font-semibold mb-4">Interview Generation</h3>

      <Agent
        userName={user.name}
        userId={user.id}
        profileImage={user.profileURL} // optional if Agent supports it
        type="generate"
      />
    </>
  );
};

export default Page;
