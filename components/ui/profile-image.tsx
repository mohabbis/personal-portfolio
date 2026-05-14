import { cn } from "@/lib/utils";
import { FallbackImage } from "@/components/ui/fallback-image";

const PROFILE_IMAGE_SRC = "/images/profile/Mrafiqheadshot.JPG";
const SMILING_PROFILE_IMAGE_SRC = "/images/profile/Mrafiqheadshot.JPG";

type ProfileImageProps = {
  className?: string;
  priority?: boolean;
  variant?: "headshot" | "smiling";
};

export function ProfileImage({ className, priority = false, variant = "headshot" }: ProfileImageProps) {
  const src = variant === "smiling" ? SMILING_PROFILE_IMAGE_SRC : PROFILE_IMAGE_SRC;

  return (
    <div className={cn("rounded-full border border-white/15 bg-card p-1 shadow-soft", className)}>
      <FallbackImage
        src={src}
        alt="Portrait of Muhammad Rafiq"
        fallbackLabel="Photo pending"
        fill
        priority={priority}
        sizes="96px"
        className="rounded-full"
        imageClassName="rounded-full"
      />
    </div>
  );
}
