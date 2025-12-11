import type { Meta, StoryObj } from "@storybook/nextjs";
import Navbar from "./navbar";

const meta = {
  title: "Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightModeLayout: Story = {
  args: { themeToggle: "light", setThemeToggle: () => {} },
};
