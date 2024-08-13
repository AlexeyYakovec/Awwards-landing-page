import { cn } from "@/lib/utils";
import React from "react";

interface Props {
   className?: string;
   children: React.ReactNode;
   title: string | React.ReactNode;
}

export const FollowingPointerCard: React.FC<Props> = ({
   className,
   children,
   title,
}) => {
   return <div className={cn("", className)}> {children} </div>;
};
