import MobileMenuPanel from "./MobileMenuPanel";
import MobileProjectItems from "./MobileProjectItems";
import MobileActionItem from "./MobileActionItem";

import type { NavItems } from "@/types/navigation/NavItem";
import type { NavActionItems } from "@/types/navigation/NavActionItem";
import MobileItem from "./MobileItem";

export interface NavbarMobileProps {
  projectItems: NavItems;
  menuItems: NavItems;
  aboutItems: NavItems;
  actionItems: NavActionItems;
}

const NavbarMobile = ({
  projectItems,
  menuItems,
  aboutItems,
  actionItems,
}: NavbarMobileProps) => {
  return (
    <MobileMenuPanel>
      <MobileProjectItems items={projectItems} />
      <div className="space-y-6 py-6 px-5">
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
          {menuItems.map((item) => (
            <MobileItem key={item.name} href={item.href}>
              {item.name}
            </MobileItem>
          ))}
          {aboutItems.map((item) => (
            <MobileItem key={item.name} href={item.href}>
              {item.name}
            </MobileItem>
          ))}
        </div>
        <div>
          {actionItems.map((item) => (
            <MobileActionItem key={item.name} href={item.href}>
              {item.name}
            </MobileActionItem>
          ))}
        </div>
      </div>
    </MobileMenuPanel>
  );
};

export default NavbarMobile;
