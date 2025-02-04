import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export const layoutData = [
  {
    "Quick Links": [
      "Customer Service",
      "Strategic Partner Directory",
      "Get a Quote",
      "Request a Business Account",
      "Universal Alliance for Your Business",
    ],

    "Our Divisions": [
      "Universal Alliance Express",
      "Universal Alliance Global Forwarding",
      "Universal Alliance Supply Chain",
      "Universal Alliance eCommerce",
      "Other Global Divisions",
    ],

    "Industry Sectors": [
      "Auto-Mobility",
      "Energy",
      "Engineering and Manufacturing",
      "Life Sciences and Healthcare",
      "Retail and Fashion",
      "Technology",
    ],


  },
];

export const pages = [
  { pageName: "About", link: "/about" },
  {
    pageName: "Services",
    link: "/service",
    childPages: [
      {
        id: "1",
        serviceName: "Express Courier",
        icon: <ArrowForwardIosIcon fontSize="small" />,
      },
      {
        id: "2",
        serviceName: "Cargo Services",
        icon: <ArrowForwardIosIcon fontSize="small" />,
      },
      {
        id: "3",
        serviceName: "Air Freight",
        icon: <ArrowForwardIosIcon fontSize="small" />,
      },
      {
        id: "4",
        serviceName: "Sea Freight",
        icon: <ArrowForwardIosIcon fontSize="small" />,
      },

      {
        id: "5",
        serviceName: "Other Services",
        icon: <ArrowForwardIosIcon fontSize="small" />,
      },
    ],
  },
  { pageName: "Solutions", link: "/solutions" },
  // { pageName: "Track", link: "/" },
  { pageName: "Contact", link: "/contact" },
  // { pageName: "Pricing", link: "/pricing" },
  // { pageName: "Calculate Distance", link: "/calulator" },
  { pageName: "Blogs", link: "/blog" },
];
