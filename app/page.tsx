import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6">
      <Image
        src="/hotdogdog.png"
        alt="hot dog dog"
        width={200}
        height={200}
        priority
      />
      <button
        disabled
        className="rounded-full border border-black/20 px-6 py-2 text-sm font-medium text-black/50 cursor-not-allowed"
      >
        coming soon
      </button>
    </div>
  );
}
