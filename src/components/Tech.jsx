

import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";


import { RiReactjsLine } from "react-icons/ri"
import { FaAngular } from "react-icons/fa";
import { SiJquery } from "react-icons/si";

import { FaLaravel } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMysql } from "react-icons/di";

import { FaAws } from "react-icons/fa";

const Tech = () => {
  return (
    <div className=" border-b border-neutral-800 pb-24">
        <h1 className=" my-20 text-center text-4xl">
            Technology      
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 py-4">
                <FaPhp className="text-7xl text-cyan-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 py-4">
                <IoLogoJavascript className="text-7xl text-cyan-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 py-4">
                <FaPython className="text-7xl text-cyan-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 py-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 py-4">
                <FaAngular className="text-7xl text-cyan-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 py-4">
                <SiJquery className="text-7xl text-cyan-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 py-4">
                <FaLaravel className="text-7xl text-cyan-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 py-4">
                <FaNodeJs className="text-7xl text-cyan-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 py-4">
                <DiMongodb className="text-7xl text-cyan-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 py-4">
                <BiLogoPostgresql className="text-7xl text-cyan-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 py-4">
                <DiMysql className="text-7xl text-cyan-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 py-4">
                <FaAws className="text-7xl text-cyan-400"/>
            </div>
        </div>
      
    </div>
  )
}

export default Tech
