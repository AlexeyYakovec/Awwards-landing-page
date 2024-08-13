import {
   HeaderSection,
   FooterSection,
   CreatorSection,
   FollowBrandSection,
   LearnFromSection,
   MarketplaceSection,
   NomineeSection,
   ShareWorkSection,
   HeroSection,
} from "@/components/sections/index";

export default function Home() {
   return (
      <main className="bg-[#F8F8F8]">
         <HeaderSection />
         <div className="flex flex-col gap-8 md:gap-[100px]">
            <HeroSection />
            <div className="px-4 md:px-[52px] flex flex-col gap-8 md:gap-[100px]">
               <FollowBrandSection />
               <NomineeSection />
               <LearnFromSection />
               <MarketplaceSection />
               <CreatorSection />
               <ShareWorkSection />
               <FooterSection />
            </div>
         </div>
      </main>
   );
}
