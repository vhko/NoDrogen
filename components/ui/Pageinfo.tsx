/*
 * @Author: zitons
 * @Date: 2024-02-21 09:19:46
<<<<<<< HEAD
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-31 22:03:33
=======
 * @LastEditors: vhko
 * @LastEditTime: 2024-03-25 19:24:02
>>>>>>> 8a5622994b6bf94b9ebf24d4db30e0473110f123
 * @Description: 简介
 */
import Image from "next/image";
import { HiMiniClock, HiMiniUserCircle } from "react-icons/hi2";
// import Head from "../Head";

import Style from "./ui.module.css";
const Pageinfo = (props) => {
   return (
      <>
         {/* <Head /> */}
         <div className={`${Style.pageinfo} container`}>
            <div className={Style.cover}>
               <Image
                  className={Style.img}
                  src={props.data?.cover}
                  alt="cover"
                  fill={true}
               />
            </div>
            <div className=" flex z-10 absolute items-center flex-col gap-2 justify-center">
               <div style={{ marginLeft: "-5px" }}>
                  {props.data.tags == undefined
                     ? console.log(null)
                     : props.data.tags.map((item) => (
                        <span
                           className={`tags rounded-md leading-8 m-1 notion-${item.color}_background`}
                        >
                           {item.name}
                        </span>
                     ))}
               </div>
               <div className={Style.title}>
                  <p>[{props.data.type}]&nbsp;</p>
                  <p>
                     {props.data.icon}
                     {props.title}
                  </p>

               </div>

               <div>
                  <p>{props.data?.summary}</p>
                  <div className="flex gap-4">
                     <p className={Style.meta}>
                        <HiMiniUserCircle />
                        {props.data?.Person?.[0]?.name}
                     </p>
                     <p className={Style.meta}>
                        <HiMiniClock />
                        {props.data.date?.["start_date"]}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default Pageinfo;
