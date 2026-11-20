import { createSchema, type HydrogenComponentProps } from "@weaverse/hydrogen";
import { Icon } from "~/components/icon";

let ICONS = {
  "shield-check": "shield-check-duotone",
  star: "star-duotone",
  heart: "heart-duotone",
  clock: "clock-duotone",
  leaf: "leaf-duotone",
  package: "package-duotone",
  globe: "globe-duotone",
  smiley: "smiley-duotone",
} as const;

type IconOption = keyof typeof ICONS;

interface DemoShowcaseItemProps extends HydrogenComponentProps {
  icon: IconOption;
  heading: string;
  content: string;
}

function DemoShowcaseItem(props: DemoShowcaseItemProps) {
  let { icon, heading, content, ...rest } = props;
  let iconName = ICONS[icon];

  return (
    <div
      {...rest}
      className="border-line-subtle flex flex-col gap-3 rounded-lg border p-6 text-center"
    >
      {iconName && (
        <Icon name={iconName} className="size-8 shrink-0 self-center" />
      )}
      {heading && <h3 className="text-lg">{heading}</h3>}
      {content && (
        <p className="text-body-subtle text-sm leading-relaxed">{content}</p>
      )}
    </div>
  );
}

export default DemoShowcaseItem;

export let schema = createSchema({
  type: "demo-showcase--item",
  title: "Showcase item",
  label: (data: DemoShowcaseItemProps) => data.heading,
  settings: [
    {
      group: "Item",
      inputs: [
        {
          type: "select",
          label: "Icon",
          name: "icon",
          configs: {
            options: [
              { value: "package", label: "Package" },
              { value: "shield-check", label: "Shield check" },
              { value: "star", label: "Star" },
              { value: "heart", label: "Heart" },
              { value: "clock", label: "Clock" },
              { value: "leaf", label: "Leaf" },
              { value: "globe", label: "Globe" },
              { value: "smiley", label: "Smiley" },
            ],
          },
          defaultValue: "package",
        },
        {
          type: "text",
          label: "Heading",
          name: "heading",
          defaultValue: "Feature title",
          placeholder: "Feature title",
        },
        {
          type: "textarea",
          label: "Description",
          name: "content",
          defaultValue: "Describe this feature in a sentence or two.",
          placeholder: "Describe this feature...",
        },
      ],
    },
  ],
});
