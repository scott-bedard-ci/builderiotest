import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";

// ❖ Core button
interface FigmaCoreButtonProps extends BaseFigmaProps {
  Type?: "Primary" | "Tertiary" | "Secondary" | "Text only";
  Content?: "Left Icon" | "Right Icon" | "Text";
  Size?: "Large" | "Medium" | "Small";
  State?: "Enabled" | "Hover" | "Pressed" | "Disabled";
}

// Notice this is a scaffolded mapping, you should update the code to fit the actual component
// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  componentName: "Core button",
  componentKey: "65cf4da82747add58f10435913789c0aa2846de7",
  mapper(figma: FigmaCoreButtonProps) {
    // Transform type to common button variant naming
    const getButtonVariant = (type?: string) => {
      switch (type) {
        case "Primary":
          return "primary";
        case "Secondary":
          return "secondary";
        case "Tertiary":
          return "tertiary";
        case "Text only":
          return "text";
        default:
          return "primary";
      }
    };

    // Handle button size
    const getButtonSize = (size?: string) => {
      switch (size) {
        case "Large":
          return "lg";
        case "Medium":
          return "md";
        case "Small":
          return "sm";
        default:
          return "md";
      }
    };

    // Extract main properties
    const variant = getButtonVariant(figma.Type);
    const size = getButtonSize(figma.Size);
    const disabled = figma.State === "Disabled";

    // Handle button content and icons
    const hasLeftIcon = figma.Content === "Left Icon";
    const hasRightIcon = figma.Content === "Right Icon";

    return (
      <Button
        variant={variant}
        size={size}
        disabled={disabled}
        state={figma.State?.toLowerCase() ?? "enabled"}
      >
        {hasLeftIcon && <Icon position="left" />}
        {figma.$children}
        {hasRightIcon && <Icon position="right" />}
      </Button>
    );
  },
});
