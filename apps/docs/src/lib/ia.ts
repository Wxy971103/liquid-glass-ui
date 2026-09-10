export type NavItem = {
  title: string;
  href: string;
};

export const topNav: NavItem[] = [
  { title: "首页", href: "/" },
  { title: "指南", href: "/guide/installation" },
  { title: "组件", href: "/components/button" },
  { title: "主题", href: "/theme" }
];

export const guideNav: NavItem[] = [
  { title: "安装", href: "/guide/installation" },
  { title: "快速开始", href: "/guide/quickstart" },
  { title: "Tokens", href: "/guide/tokens" },
  { title: "主题切换", href: "/guide/theming" },
  { title: "玻璃分层", href: "/guide/glass-layering" }
];

export const componentsNav: NavItem[] = [
  { title: "Button 按钮", href: "/components/button" },
  { title: "Input 输入框", href: "/components/input" },
  { title: "Select 选择器", href: "/components/select" },
  { title: "Checkbox 多选框", href: "/components/checkbox" },
  { title: "Radio 单选框", href: "/components/radio" },
  { title: "Switch 开关", href: "/components/switch" },
  { title: "Tabs 标签页", href: "/components/tabs" },
  { title: "Dialog 对话框", href: "/components/dialog" },
  { title: "Toast 提示", href: "/components/toast" },
  { title: "Pagination 分页", href: "/components/pagination" },
  { title: "Tag 标签", href: "/components/tag" },
  { title: "Badge 徽标", href: "/components/badge" },
  { title: "Card 卡片", href: "/components/card" },
  { title: "Empty 空状态", href: "/components/empty" },
  { title: "Spinner 加载", href: "/components/spinner" },
  { title: "Divider 分割线", href: "/components/divider" },
  { title: "Tooltip 文字提示", href: "/components/tooltip" }
];

