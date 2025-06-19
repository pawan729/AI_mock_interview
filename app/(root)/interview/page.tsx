import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
const Page = async () => {
    const user = await getCurrentUser();
    if (!user?.name || !user?.id) {
        return <p>User not found</p>;
    }
    return (
        <>
           <h3>Interview Generation</h3>
           <Agent 
           userName={user.name} 
           userId={user.id} 
           type="generate" />
        </>
    );
};

export default Page;