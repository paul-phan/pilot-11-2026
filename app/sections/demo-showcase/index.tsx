import { createSchema } from "@weaverse/hydrogen";
import type { SectionProps } from "~/components/section";
import { Section, sectionSettings } from "~/components/section";

interface DemoShowcaseProps extends SectionProps {}

function DemoShowcase(props: DemoShowcaseProps) {
  const { children, ...rest } = props;
  return <Section {...rest}>{children}</Section>;
}

export default DemoShowcase;

export let schema = createSchema({
  type: "demo-showcase",
  title: "Demo showcase",
  settings: sectionSettings,
  childTypes: ["demo-showcase--items", "subheading", "heading", "paragraph"],
  presets: {
    gap: 40,
    children: [
      {
        type: "subheading",
        content: "Demo section",
      },
      {
        type: "heading",
        content: "Demo showcase",
      },
      {
        type: "demo-showcase--items",
      },
    ],
  },
});
