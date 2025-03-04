import { WavyBackground } from "@/components/ui/wavy-background";
import { AuthCard } from "../components/Auth";

// export const Auth = () => {
//     return (
//         <AuthCard/>
//     );
// };

export const Auth = () => {
    return (
        <div className="relative w-full h-screen">
            <WavyBackground className="absolute inset-0"/>
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <AuthCard/>
            </div>
        </div>
    );
};