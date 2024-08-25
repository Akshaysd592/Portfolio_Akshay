"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBluetoothConnected,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconCapRounded,
  IconCone2,
  IconContract,
  IconExchange,
  IconHome,
  IconNewSection,
  IconPhoneCalling,
  IconProgress,
  IconPrompt,
  IconStackFilled,
  IconTerminal2,
} from "@tabler/icons-react";

import Image from "next/image";
import { Linkedin } from "lucide";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Projects",
      icon: (
        // <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        <IconPrompt className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#project",
    },
    {
      title: "Skills",
      icon: (
        // <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        <IconStackFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        // <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        // <Linkedin/>
      ),
      href: "https://www.linkedin.com/in/akshaysd592",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.github.com/akshaysd592",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.x.com/akshaysd592",
    },
    {
      title: "Contact",
      icon: (
        <IconCone2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.x.com/akshaysd592",
    },
  ];
  return (
    <div className=" flex w-full items-center flex-row justify-end sm:justify-center relative ">
     
      <div className="absolute z-50 top-6 mr-6 sm:top-14 mt-4">
        <FloatingDock
        // desktopClassName="flex justify-center items-z"
          items={links}
          // mobileClassName="flex justify-right flex-row "
        />
      </div>

      {/* <div className="p-4 m-5 bg-red-700 flex flex-row -translate-y-full "></div> */}
    </div>
  );
}
