"use client";
import React, { use, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ReactPlayer from "react-player/youtube";
import { HeadingsMap } from "@/components/HeadingsMap";
const page = () => {
  const { courseid } = useParams<{ courseid: string }>();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className="w-full flex justify-center gap-8 bg-[#EFF6FF]  text-[#EFF6FF] p-4">
      <div className="hidden sm:block space-y-4 fixed z-10 left-28  bg-[#172554] shadow-lg  p-8 rounded-3xl min-h-[80vh] text-md font-semibold justify-center items-center">
        {/* Titile */}
        <div className="font-bold text-xl">{courseid} Title</div>
        {/* Headings map krdo */}
        <HeadingsMap/>
      </div>
      {/* content */}
      <div className="space-y-10  w-full sm:w-6/12 ml-20 justify-center items-center ">
        {/* {map each content} */}
        <div id="subheading1" className="  bg-[#1E3A8A] rounded-3xl overflow-x-auto  shadow-lg p-6 space-y-4 justify-center items-center">
          <ReactPlayer  url="https://www.youtube.com/watch?v=havARbP7Fyk&ab_channel=Harshgujral" />
          <div className="font-bold text-3xl">Summary:</div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            quidem quam eum beatae, mollitia dolorum temporibus. Nulla, maxime
            impedit aperiam ab omnis eius ex distinctio pariatur, quasi corporis
            quia laborum non voluptas, consectetur laudantium optio sit iusto
            consequuntur incidunt! Culpa enim, nam cupiditate nostrum
            perspiciatis explicabo facere obcaecati pariatur minus.
          </div>
        </div>
        <div id="subheading2" className=" bg-[#1E3A8A] overflow-x-auto space-y-4 rounded-3xl shadow-lg p-6 justify-center items-center">
          <ReactPlayer url="https://www.youtube.com/watch?v=havARbP7Fyk&ab_channel=Harshgujral" />
          <div className="font-bold text-3xl">Summary:</div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            quidem quam eum beatae, mollitia dolorum temporibus. Nulla, maxime
            impedit aperiam ab omnis eius ex distinctio pariatur, quasi corporis
            quia laborum non voluptas, consectetur laudantium optio sit iusto
            consequuntur incidunt! Culpa enim, nam cupiditate nostrum
            perspiciatis explicabo facere obcaecati pariatur minus.
          </div>
        </div>
        <div id="subheading3" className=" bg-[#1E3A8A] overflow-x-auto space-y-4 rounded-3xl shadow-lg p-6 justify-center items-center">
          <ReactPlayer url="https://www.youtube.com/watch?v=havARbP7Fyk&ab_channel=Harshgujral" />
          <div className="font-bold text-3xl">Summary:</div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            quidem quam eum beatae, mollitia dolorum temporibus. Nulla, maxime
            impedit aperiam ab omnis eius ex distinctio pariatur, quasi corporis
            quia laborum non voluptas, consectetur laudantium optio sit iusto
            consequuntur incidunt! Culpa enim, nam cupiditate nostrum
            perspiciatis explicabo facere obcaecati pariatur minus.
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
