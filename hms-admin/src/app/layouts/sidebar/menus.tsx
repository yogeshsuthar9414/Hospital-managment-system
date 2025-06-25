import { Home, User, Settings, UserCart, Truck } from "iconoir-react";

export const MenuItems = [
  {
    title: "Dashboard",
    Icon: Home,
    isHide: true,
    link: "dashboard",
  },
  {
    isHeader: true,
    title: "User",
  },
  {
    title: "User",
    Icon: User,
    isHide: true,
    link: "user",
  },
  {
    title: "Customer",
    Icon: UserCart,
    isHide: true,
    link: "customer",
  },
  {
    title: "Supplier",
    Icon: Truck,
    isHide: true,
    link: "supplier",
  },
  {
    isHeader: true,
    title: "Work Order & Asset",
  },
  {
    title: "Work Orders",
    Icon: Home,
    isHide: true,
    link: "workorder",
  },
  {
    title: "Assets Management",
    Icon: Home,
    link: "#",
    isHide: true,
    isDivider: false,
    child: [
      {
        childtitle: "Asset List",
        childlink: "assetlist",
      },
      {
        childtitle: "Asset Hierarchy",
        childlink: "assethierarchy",
      },
      {
        childtitle: "Asset History & Lifecycle",
        childlink: "assethistory",
      },
    ],
  },
  {
    isHeader: true,
    title: "Preventive Maintenance",
  },
  {
    title: "PM Plan",
    Icon: Home,
    isHide: true,
    link: "pmplan",
  },
  {
    title: "Schedule",
    Icon: User,
    isHide: true,
    link: "branch",
  },
  {
    title: "Machine",
    Icon: Settings,
    link: "#",
    isHide: true,
    isDivider: false,
    child: [
      {
        childtitle: "Machine",
        childlink: "staff",
      },
      {
        childtitle: "Spare Parts",
        childlink: "payroll",
      },
      {
        childtitle: "Role & Permission",
        childlink: "rolepermission",
      },
    ],
  },
  {
    isHeader: true,
    title: "Assets",
  },
  {
    title: "POS",
    Icon: Home,
    link: "#",
    isHide: true,
    isDivider: false,
    child: [
      {
        childtitle: "POS",
        childlink: "pos",
      },
      {
        childtitle: "POS Orders & Table Orders",
        childlink: "posorders",
      },
    ],
  },
  {
    title: "Online Orders",
    Icon: Home,
    isHide: true,
    link: "onlineorder",
  },
  // {
  //   title: "Table Orders",
  //   Icon: BiShoppingBag,
  //   isHide: true,
  //   link: "onlineorder",
  // },
  {
    isHeader: true,
    title: "Menus and Inventories",
  },
  {
    title: "Menu",
    Icon: Home,
    isHide: true,
    link: "menu",
  },
  {
    title: "Dining Table",
    Icon: Home,
    isHide: true,
    link: "table",
  },
  {
    isHeader: true,
    title: "Customers & Suppliers",
  },
  {
    title: "Customers",
    Icon: Home,
    isHide: true,
    link: "customer",
  },
  {
    title: "Suppliers",
    Icon: Home,
    isHide: true,
    link: "supplier",
  },
  {
    isHeader: true,
    title: "Inventories",
  },
  {
    title: "Inventories",
    Icon: Home,
    isHide: true,
    link: "inventory",
  },
  {
    isHeader: true,
    title: "Bills & Payments",
  },
  {
    title: "Bills",
    Icon: Home,
    isHide: true,
    link: "bill",
  },
  {
    title: "Transaction History",
    Icon: Home,
    isHide: true,
    link: "transaction",
  },
  {
    isHeader: true,
    title: "Settings & Reports",
  },
  {
    title: "settings",
    Icon: Home,
    link: "#",
    isHide: true,
    child: [
      {
        childtitle: "Configuration",
        childlink: "configuration",
      },
      {
        childtitle: "Location",
        childlink: "location",
      },
    ],
  },
  {
    title: "Reports",
    Icon: Home,
    link: "#",
    isHide: true,
    child: [
      {
        childtitle: "AMC Customer",
        childlink: "/amccustomer",
      },
      {
        childtitle: "Complaint & Services",
        childlink: "/Complaintservice",
      },
      {
        childtitle: "Work Order",
        childlink: "/workorderreport",
      },
    ],
  },
];
