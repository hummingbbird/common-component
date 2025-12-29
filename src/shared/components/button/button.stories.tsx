import type { Meta, StoryObj } from "@storybook/react";

import Button from "./button";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Button 컴포넌트 입니다.

## Variants (변형)
- **primary**: 기본적인 프라이머리 버튼
- **gray_fill**: 회색 배경에 테두리가 있는 버튼
- **border**: 투명 배경에 테두리만 있는 버튼

## Sizes (크기)
- **sm**: 4rem 높이
- **md**: 5rem 높이
- **lg**: 5.6rem 높이
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "gray_fill", "border"],
      description: "버튼의 색상 및 스타일을 결정합니다.",
      table: {
        type: { summary: "primary | gray_fill | border" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "버튼의 크기를 결정합니다.",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "버튼의 비활성화 상태를 설정합니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: { type: "text" },
      description: "버튼 내부에 표시될 텍스트나 요소입니다.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

// 기본 버튼
export const Default: Story = {
  args: {
    children: "버튼",
    variant: "primary",
    size: "md",
  },
};

// Primary 변형
export const Primary: Story = {
  args: {
    children: "Primary 버튼",
    variant: "primary",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story:
          "주요 액션에 사용되는 기본 버튼입니다. 기본 프라이머리 스타일을 사용합니다.",
      },
    },
  },
};

// White Fill 변형
export const WhiteFill: Story = {
  args: {
    children: "White Fill 버튼",
    variant: "gray_fill",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "흰색 배경과 테두리를 가진 버튼입니다.",
      },
    },
  },
};

// Border 변형
export const Border: Story = {
  args: {
    children: "Border 버튼",
    variant: "border",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story:
          "보조 액션이나 취소에 사용되는 버튼입니다. 테두리만 있는 스타일입니다.",
      },
    },
  },
};

// 크기 비교
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button variant="primary" size="sm">
        Small (sm)
      </Button>
      <Button variant="primary" size="md">
        Medium (md)
      </Button>
      <Button variant="primary" size="lg">
        Large (lg)
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "버튼의 세 가지 크기 옵션을 비교할 수 있습니다.",
      },
    },
  },
};

// Disabled 상태
export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button variant="primary" size="md" disabled>
        Disabled Primary
      </Button>
      <Button variant="gray_fill" size="md" disabled>
        Disabled Gray Fill
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "disabled 상태의 버튼들입니다. 클릭이 불가능하며 비활성화 스타일이 적용됩니다.",
      },
    },
  },
};
