import {
  GraduationCap,
  Telescope,
  Wrench,
  Compass,
  type LucideIcon,
} from "lucide-react";
import { type ServiceIcon } from "@/content/services";

export const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  graduationCap: GraduationCap,
  telescope: Telescope,
  wrench: Wrench,
  compass: Compass,
};
