import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
   className?: string;
   title: string;
   avatar: string;
}

export const TitleComponent: React.FC<Props> = ({
   className,
   title,
   avatar,
}) => {
   return (
      <div className="flex space-x-2 items-center">
         <Image
            src={avatar}
            alt="avatar"
            width={20}
            height={20}
            className={className}
         />
         <p>{title}</p>
      </div>
   );
};
