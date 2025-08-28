import { BlocksRenderer } from "@/registry/new-york/blocks/hello-world-demo/components/blocks-renderer";
import type { HelloWorldType } from "@/registry/new-york/blocks/hello-world-demo/lib/payload-types";

// Sample data - replace this with actual PayloadCMS data fetching
const sampleBlocks: HelloWorldType[] = [
  {
    blockType: "hello-world",
    title: "Welcome to PayloadCMS Blocks",
    content:
      "This is your HelloWorld block component working perfectly with the configuration.",
    buttonText: "Get Started",
    id: "1",
  },
  {
    blockType: "hello-world",
    title: "Another Block Instance",
    content:
      "You can have multiple instances of the same block with different content.",
    buttonText: "Learn More",
    id: "2",
  },
];

export default function Page() {
  return (
    <main className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          PayloadCMS Blocks Demo
        </h1>
        <BlocksRenderer blocks={sampleBlocks} />
      </div>
    </main>
  );
}
