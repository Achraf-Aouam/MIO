import Navigation from "@/components/navigation";

// export default function layout({ children }: { children: React.ReactNode }) {
//   return (
//     <main className="h-full ">
//       <div className=" pl-10 pr-10 pt-6">
//         {children}
//         <div className="bg-[#155733] absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_90%_60%_at_20%_0%,#000_70%,transparent_150%)] -z-10 " />
//       </div>
//     </main>
//   );
// }

export default function layout({ children }: { children: React.ReactNode }) {
  return <main className="h-full ">{children}</main>;
}
