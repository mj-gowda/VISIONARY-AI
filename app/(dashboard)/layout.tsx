import Navbar from "@/components/navbar/Navbar";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
    /**
     * Must be passed from a server component (layout) to the client component.
     * This is because the action check is in the server.
     * This cannot be called from a client component directly.
     */
    const apiLimitCount = await getApiLimitCount();

    return (
        <div className="h-full relative">
            <div
                className="
				hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-neutral-900"
            >
                <Sidebar apiLimitCount={apiLimitCount} isPro={false} />
            </div>
            <main className="md:pl-72 pb-10">
                <Navbar />
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;