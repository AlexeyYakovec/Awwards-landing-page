import React from "react";

interface CreateSectionProps {
   children: React.ReactNode;
   className: string;
}

export const CreatorSection = ({ className, children }: CreateSectionProps) => {
   return <div className={className}>{children}</div>;
};
