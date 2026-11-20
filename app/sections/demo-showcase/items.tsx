import { createSchema, type HydrogenComponentProps } from "@weaverse/hydrogen";

interface DemoShowcaseItemsProps extends HydrogenComponentProps {
  gap: number;
}

function DemoShowcaseItems(props: DemoShowcaseItemsProps) {
  const { children, gap, ...rest } = props;

  return (
    <div
      {...rest}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      style={{ gap: `${gap}px` }}
    >
      {children}
    </div>
  );
}

export default DemoShowcaseItems;

export const schema = createSchema({
  type: "demo-showcase--items",
  title: "Items",
  settings: [
    {
      group: "Items",
      inputs: [
        {
          type: "range",
          label: "Items gap",
          name: "gap",
          configs: {
            min: 8,
            max: 80,
            step: 4,
            unit: "px",
          },
          defaultValue: 24,
        },
      ],
    },
  ],
  childTypes: ["demo-showcase--item"],
  presets: {
    children: [
      {
        type: "demo-showcase--item",
        icon: "package",
        heading: "Fast shipping",
        content: "Free express delivery on every order, everywhere we ship.",
      },
      {
        type: "demo-showcase--item",
        icon: "shield-check",
        heading: "Secure checkout",
        content: "Payments are encrypted and processed by Shopify.",
      },
      {
        type: "demo-showcase--item",
        icon: "smiley",
        heading: "Happy customers",
        content: "Join thousands of shoppers who rate us five stars.",
      },
    ],
  },
});
