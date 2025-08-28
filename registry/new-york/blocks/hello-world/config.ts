import type { Block } from 'payload'

export const HelloWorld: Block = {
  slug: 'hello-world',
  interfaceName: 'HelloWorldBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Hello World Payload Block',
    },
    {
      name: 'content',
      type: 'text',
      required: false,
      defaultValue: 'This is a payload block component with both component.tsx and config.ts files.',
    },
    {
      name: 'buttonText',
      type: 'text',
      required: false,
      defaultValue: 'Click me',
    },
  ],
}