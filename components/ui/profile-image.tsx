import { cn } from "@/lib/utils";
import { FallbackImage } from "@/components/ui/fallback-image";

const AVATAR_IMAGE_SRC = "/images/profile/headshot-styled.png";
const REAL_IMAGE_SRC = "/images/profile/Mrafiqheadshot.JPG";

type ProfileImageProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
  variant?: "avatar" | "real";
};

export function ProfileImage({
  className,
  priority = false,
  sizes = "96px",
  variant = "avatar",
}: ProfileImageProps) {
  const src = variant === "real" ? REAL_IMAGE_SRC : AVATAR_IMAGE_SRC;

  return (
    <div className={cn("rounded-full border border-white/15 bg-card p-1 shadow-soft", className)}>
      <FallbackImage
        src={src}
        alt="Portrait of Muhammad Rafiq"
        fallbackLabel="Photo pending"
        fill
        priority={priority}
        sizes={sizes}
        className="rounded-full"
        imageClassName="rounded-full"
      />
    </div>
  );
}
