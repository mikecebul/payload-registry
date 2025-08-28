import * as React from "react";
import { OpenInV0Button } from "@/registry/new-york/components/open-in-v0-button";
import { HelloWorldBlock } from "@/registry/new-york/blocks/hello-world/component";
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A Payload CMS block component
            </h2>
            <OpenInV0Button name="hello-world-demo" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <HelloWorldBlock
              title="Hello World Payload Block"
              content="This is a payload block component with both component.tsx and config.ts files."
              buttonText="Click me"
              blockType="hello-world"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
