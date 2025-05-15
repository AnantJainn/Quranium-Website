//import { useEffect, useRef } from "react";
import { HeroData } from "@/types";
import Bounded from "@/components/Bounded";

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <Bounded>
      <div className="grid grid-cols-1 gap-6">
        <h1 className="text-4xl font-bold">
          {data.first_name} {data.last_name}
        </h1>
        <p className="text-xl">{data.tag_line}</p>
      </div>
    </Bounded>
  );
}
