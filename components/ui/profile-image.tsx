import Image from "next/image";

import headshot from "@/public/images/profile/headshot.jpg";
import { cn } from "@/lib/utils";

type ProfileImageProps = {
  className?: string;
  priority?: boolean;
};

export function ProfileImage({ className, priority = false }: ProfileImageProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-full border border-border bg-card shadow-soft", className)}>
      <Image
        src={headshot}
        alt="Muhammad Rafiq"
        fill
        priority={priority}
        sizes="(min-width: 640px) 128px, 112px"
        className="object-cover object-[center_15%]"
      />
    </div>
  );
}
