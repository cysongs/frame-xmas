import { fetchMetadata } from "frames.js/next";
import {Frame} from "@/app/components/Frame";

export async function generateMetadata() {
  return {
    title: "xmas",
    // provide a full URL to your /frames endpoint
    other: await fetchMetadata(
      new URL(
        "/xmas","https://frame-xmas.vercel.app"
      )
    ),
  };
}

// This is a react server component only
export default async function Home() {
  const metadata = await generateMetadata();

  // then, when done, return next frame
  return (
    <div className="flex flex-col max-w-[600px] w-full gap-2 mx-auto p-2">
      <Frame metadata={metadata} url="https://frame-xmas.vercel.app/xmas" />
    </div>
  );
}