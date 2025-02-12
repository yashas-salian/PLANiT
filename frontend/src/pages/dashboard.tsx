import { SessionNavBar } from "../components/ui/sidebar";

export const Dashboard=()=> {
  return (
    <div className="flex">
      <SessionNavBar />
      <div className="ml-[3.05rem] flex-grow p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Welcome to your dashboard!</p>
      </div>
    </div>
  );
}
