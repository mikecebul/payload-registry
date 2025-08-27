import { Button } from "@/registry/new-york/ui/button";
import type { HelloWorldBlock } from "@/payload-types";

export function HelloWorldPayload({
  title,
  content,
  buttonText,
}: HelloWorldBlock) {
  return (
    <div className="p-6 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-muted-foreground mb-4">{content}</p>
      <Button>{buttonText}</Button>
    </div>
  );
}
