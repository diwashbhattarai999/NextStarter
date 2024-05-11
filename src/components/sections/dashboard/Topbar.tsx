import UserProfile from "@/components/sections/navbar/user-profile";

const Topbar = () => {
  return (
    <div className="border-b border-border py-4 flex items-center justify-between px-4">
      <h1>Topbar</h1>
      <UserProfile />
    </div>
  );
};

export default Topbar;
