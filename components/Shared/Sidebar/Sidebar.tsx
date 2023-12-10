// "use client";

// import { Disclosure } from "@headlessui/react";
// import { BsChevronDown } from "react-icons/bs";
// import { BsPeopleFill } from "react-icons/bs";
// import { link } from "@/client/util/sidebarData";
// import Setting from "@/components/cards/Setting";
// import HomeBar from "@/components/cards/Home";

// interface Props {
//   data: link[];
// }
// const LeftSidebar = ({ data }: Props) => {
//   return (
//     <div className="w-[300px] px-4 pt-10 bg-slate-100 h-[100vh] space-y-2">
      
//       <HomeBar/>

//       {data.map((items) => {
//         return (
//           <div className="rounded-xl" key={items.id}>
//             <Disclosure>
//               {({ open }) => (
//                 <>
//                   <Disclosure.Button
//                     className="flex w-full items-center space-x-4 rounded-xl px-3 text-brand-500 text-heading4-medium py-2 text-left 
//                 focus:outline-none focus-visible:ring hover:bg-brand-500  hover:text-white cursor-pointer group"
//                   >
//                     <div className="flex items-center space-x-3">
//                       {items.icon}
//                       <p className="pt-1">{items.titleParent}</p>
//                     </div>
//                     <BsChevronDown
//                       size="15"
//                       className={`${
//                         open ? "rotate-180 transform" : ""
//                       }  text-brand-500 group-hover:text-white`}
//                     />
//                   </Disclosure.Button>
//                   <Disclosure.Panel className="pl-5 pt-2 text-brand-500">
//                     <div className="space-y-2 text-base-semibold">
//                       {items.titleChildren?.map((item) => {
//                         return (
//                           <div
//                             key={item.id}
//                             className="px-[10px] py-[4px] hover:bg-brand-500 hover:text-white cursor-pointer rounded-xl"
//                           >
//                             {item.title}
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </Disclosure.Panel>
//                 </>
//               )}
//             </Disclosure>
//           </div>
//         );
//       })}
      
//       <Setting/>
//     </div>
//   );
// };
// export default LeftSidebar;
