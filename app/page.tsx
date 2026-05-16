import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Image
        src="/hotdogdog.png"
        alt="hot dog dog"
        width={200}
        height={200}
        priority
      />
    </div>
  );
}
