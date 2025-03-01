import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">MoveIt</h1>
      <Button
        variant="outline"
        className="px-8 py-6 text-[#2C71F0] border-[#2C71F0] hover:bg-[#2C71F0]/10"
      >
        View More
      </Button>
    </div>
  );
}
