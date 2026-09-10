"use client";

export * from "./lib/cn";
export * from "./tokens";

export * from "./components/badge";
export * from "./components/tag";
export * from "./components/button";
export * from "./components/card";
export * from "./components/checkbox";
export * from "./components/dialog";
export * from "./components/divider";
export * from "./components/empty";
export * from "./components/input";
export * from "./components/pagination";
export * from "./components/radio";
export * from "./components/select";
export * from "./components/spinner";
export * from "./components/switch";
export * from "./components/tabs";
export * from "./components/toast";
export * from "./components/tooltip";

// Preferred docs-friendly aliases
export { Button as LgButton } from "./components/button";
export { Input as LgInput } from "./components/input";
export { Tabs as LgTabs, TabsList as LgTabsList, TabsTrigger as LgTabsTrigger, TabsContent as LgTabsContent } from "./components/tabs";
export {
  Dialog as LgDialog,
  DialogTrigger as LgDialogTrigger,
  DialogClose as LgDialogClose,
  DialogPortal as LgDialogPortal,
  DialogOverlay as LgDialogOverlay,
  DialogContent as LgDialogContent,
  DialogHeader as LgDialogHeader,
  DialogFooter as LgDialogFooter,
  DialogTitle as LgDialogTitle,
  DialogDescription as LgDialogDescription
} from "./components/dialog";
export {
  TooltipProvider as LgTooltipProvider,
  Tooltip as LgTooltip,
  TooltipTrigger as LgTooltipTrigger,
  TooltipContent as LgTooltipContent
} from "./components/tooltip";

