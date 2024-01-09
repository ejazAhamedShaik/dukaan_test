import {
  AnalyticsNavIcon,
  AppearanceNavIcon,
  AudienceNavIcon,
  DeliveryNavIcon,
  DiscountsNavIcon,
  HomeNavIcon,
  MarketingNavIcon,
  OrdersNavIcon,
  PaymentsNavIcon,
  PluginsNavIcon,
  ProductsNavIcon,
  ToolsNavIcon,
} from "../svg";

export const navbarItems = [
  { title: "Home", icon: HomeNavIcon, path: "/" },
  { title: "Orders", icon: OrdersNavIcon, path: "/orders" },
  { title: "Products", icon: ProductsNavIcon, path: "/products" },
  { title: "Delivery", icon: DeliveryNavIcon, path: "/delivery" },
  { title: "Marketing", icon: MarketingNavIcon, path: "/marketing" },
  { title: "Analytics", icon: AnalyticsNavIcon, path: "/analytics" },
  { title: "Payments", icon: PaymentsNavIcon, path: "/payments" },
  { title: "Tools", icon: ToolsNavIcon, path: "/tools" },
  { title: "Discounts", icon: DiscountsNavIcon, path: "/discounts" },
  { title: "Audience", icon: AudienceNavIcon, path: "/audience" },
  { title: "Appearance", icon: AppearanceNavIcon, path: "/appearance" },
  { title: "Plugins", icon: PluginsNavIcon, path: "/plugins" },
];
