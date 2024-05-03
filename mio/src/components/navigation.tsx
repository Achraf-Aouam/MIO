import Link from "next/link";

const Navigation = () => {
  return (
    <div className="p-4 flex items-center justify-between relative">
      <nav className="hidden top-[50%] md:block absolute left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={"#"}>Dashboard</Link>
          <Link href={"#"}>Events</Link>
          <Link href={"#"}>Members</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
