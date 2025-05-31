import { Code, Music, Cpu, ArrowRight } from "lucide-react";

const icons = {
  code: Code,
  music: Music,
  cpu: Cpu,
  arrowRight: ArrowRight
};

export type LucideIconName = keyof typeof icons;

export default function LucideIcon({ name, size, className = "" }: { name: LucideIconName; size: number, className?: string }) {
  const Icon = icons[name];
  return <Icon size={size} className={className} />;
}