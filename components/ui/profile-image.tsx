import { cn } from "@/lib/utils";
import { FallbackImage } from "@/components/ui/fallback-image";

const PROFILE_IMAGE_SRC = "/images/profile/headshot.jpg";

type ProfileImageProps = {
  className?: string;
  priority?: boolean;
};

export function ProfileImage({ className, priority = false }: ProfileImageProps) {
  return (
    <div className={cn("rounded-full border border-white/15 bg-card p-1 shadow-soft", className)}>
      <FallbackImage
        src={PROFILE_IMAGE_SRC}
        alt="Muhammad Rafiq"
        fill
        priority={priority}
        sizes="(min-width: 640px) 128px, 112px"
        className="rounded-full"
        imageClassName="rounded-full object-cover"
      />
    </div>
  );
}
