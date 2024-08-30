import React from "react";
import { RiVoiceprintLine } from "react-icons/ri";
import SearchDropdown from "./SearchDropdown";
import GenderDropdown from "./GenderDropdown";
import AccentDropdown from "./AccentDropdown";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegClone } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";
import { IoSync } from "react-icons/io5";

export default function VoiceLibrary() {
  return (
    <>
      <div className="bg-[#1C1E21] w-full h-full rounded-2xl overflow-y-scroll">
        <div className="sticky top-0 flex items-center gap-2 px-10 w-full h-16 bg-[#222325]">
          <RiVoiceprintLine className="w-10 h-10 p-2 rounded-lg bg-[#27272A] text-[#5E5E60]" />
          <p className="text-xl font-bold">Voice Library</p>
        </div>
        <div className="p-5 flex flex-col gap-y-5">
          <div className="sm:sticky sm:top-16 w-full bg-[#27272A] p-5 rounded-2xl sm:grid sm:grid-cols-2 sm:gap-2 md:flex md:gap-2">
            <div className="flex flex-col w-full gap-2">
              <p className="">Search</p>
              <SearchDropdown />
            </div>
            <div className="flex flex-col w-full gap-2">
              <p className="">Gender</p>
              <GenderDropdown />
            </div>
            <div className="flex flex-col w-full gap-2">
              <p className="">Accent</p>
              <AccentDropdown />
            </div>
          </div>
          <div className="border border-[#333538] w-full rounded-2xl p-3 flex flex-col gap-2 hover:bg-[#333538] hover:cursor-pointer">
            <div className="grid grid-cols-[0.5fr_3fr_3fr] items-center">
              <MdOutlineKeyboardArrowRight className="text-2xl" />
              <p className="text-lg font-semibold text-left">
                Private Voices <span className="text-xs">(924/924)</span>
              </p>
              <div className="flex gap-2 justify-end">
                <button className="p-2 bg-[#27272A] text-sm font-semibold flex items-center gap-1 border border-[#5C5E60] hover:bg-[#5C5E60] rounded-xl">
                  <FaRegClone /> Clone
                </button>
                <button className="p-2 bg-[#27272A] text-sm font-semibold flex items-center gap-1 border border-[#5C5E60] hover:bg-[#5C5E60] rounded-xl">
                  <IoIosAdd /> Add
                </button>
                <button className="p-2 bg-[#27272A] text-sm font-semibold flex items-center gap-1 border border-[#5C5E60] hover:bg-[#5C5E60] rounded-xl">
                  <IoSync /> Sync
                </button>
              </div>
            </div>
            <div className="px-10">
              <p className="text-xs text-center">
                These voices were manually added from the ElevenLabs Voice
                Library to Vapi's ElevenLabs Account. To use your own private
                voices, add your credentials.
              </p>
            </div>
          </div>
          <div className="border border-[#333538] w-full rounded-2xl p-3 flex flex-col gap-2 hover:bg-[#333538] hover:cursor-pointer">
            <div className="grid grid-cols-[0.5fr_3fr_3fr] items-center">
              <MdOutlineKeyboardArrowRight className="text-2xl" />
              <p className="text-lg font-semibold text-left">
                Public Voices <span className="text-xs">(50/50)</span>
              </p>
              <div className="flex gap-2 justify-end">
                <button className="p-2 bg-[#27272A] text-sm font-semibold flex items-center gap-1 border border-[#5C5E60] hover:bg-[#5C5E60] rounded-xl">
                  <FaRegClone /> Clone
                </button>
                <button className="p-2 bg-[#27272A] text-sm font-semibold flex items-center gap-1 border border-[#5C5E60] hover:bg-[#5C5E60] rounded-xl">
                  <IoIosAdd /> Add
                </button>
                <button className="p-2 bg-[#27272A] text-sm font-semibold flex items-center gap-1 border border-[#5C5E60] hover:bg-[#5C5E60] rounded-xl">
                  <IoSync /> Sync
                </button>
              </div>
            </div>
            <div className="px-10 text-center">
              <p className="text-xs">
                These are the public voices available to everyone, even on their
                own credentials without any additional work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
