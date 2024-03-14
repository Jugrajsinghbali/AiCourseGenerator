import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  export function HeadingsMap() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Heading1</AccordionTrigger>
          <AccordionContent>
            Subheading1
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Heading2</AccordionTrigger>
          <AccordionContent>
            Subheading1
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Heading3</AccordionTrigger>
          <AccordionContent>
          Subheading1 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Heading4</AccordionTrigger>
          <AccordionContent>
          Subheading1 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Heading5</AccordionTrigger>
          <AccordionContent>
          Subheading1 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Heading6</AccordionTrigger>
          <AccordionContent>
          Subheading1 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>Heading7</AccordionTrigger>
          <AccordionContent>
          Subheading1 
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  