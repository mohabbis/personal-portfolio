import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Editorial photography archive.",
  alternates: {
    canonical: "/photography"
  }
};

export default function GalleryPage() {
  redirect("/photography");
}
