import { HelloWorldBlock } from "@/registry/new-york/blocks/hello-world/component";
import type { HelloWorldType } from "@/registry/new-york/blocks/hello-world-demo/lib/payload-types";

export function BlocksRenderer({ blocks }: { blocks: HelloWorldType[] }) {
  return (
    <div className="space-y-8">
      {blocks.map((block, index) => {
        switch (block.blockType) {
          case "hello-world":
            return (
              <HelloWorldBlock
                key={block.id || index}
                title={block.title}
                content={block.content}
                buttonText={block.buttonText}
                blockType="hello-world"
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
