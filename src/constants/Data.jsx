import { BriefcaseIcon, DribbleIcon, FacebookIcon, GithubIcon, InstagramIcon, PresentationIcon, ScaleIcon, TwitterIcon } from "./Icons";

export const navLinks = [
    { href: 'hero', text: 'Hero' },
    { href: 'company', text: 'Company' },
    { href: 'features', text: 'Features' },
    { href: 'testimonials', text: 'Testimonials' },
    { href: 'cta', text: 'CTA' },
    { href: 'footer', text: 'Footer' },
];

export const languages = [
    { value: 'Igbo', flag: 'NG'},
    { value: 'English', flag: 'US'},
    { value: 'Chinese', flag: 'CN'},
    { value: 'Spanish', flag: 'ES'},
]

export const features = [
    {
      icon: <PresentationIcon />,
      iconBgClass: "bg-blue-100 dark:bg-blue-900",
      iconTextClass: "text-blue-600 dark:text-blue-300",
      title: "Project Management",
      items: [
        "Unified Contribution Graph",
        "Org activity graph",
        "Org dependency insights",
        "Milestones",
        "Repo insights",
      ],
      itemIconClass: "fill-blue-300 dark:fill-blue-900",
    },
    {
      icon: <ScaleIcon />,
      iconBgClass: "bg-purple-100 dark:bg-purple-900",
      iconTextClass: "text-purple-600 dark:text-purple-300",
      title: "Collaborative Coding",
      items: [
        "Dynamic reports and dashboards",
        "Code review assignments",
        "Team discussions",
        "Protected branches",
        "Draft pull requests",
      ],
      itemIconClass: "fill-purple-300 dark:fill-purple-900",
    },
    {
      icon: <BriefcaseIcon />,
      iconBgClass: "bg-green-100 dark:bg-green-900",
      iconTextClass: "text-green-600 dark:text-green-300",
      title: "Enterprise Security",
      items: [
        "Required reviews",
        "Dependabot security and",
        "Dependency graph",
        "GitHub Advisory Database",
        "GPG commit signing verification",
      ],
      itemIconClass: "fill-green-300 dark:fill-green-900",
    }
  ];

  export const address = [
    {
      city: "Awka",
      address1: "Agu Awka",
      address2: "456 Enugu-Onitsha Expressway, Nigeria",
      tel: "+234 (8) 123 4567 890",
      email: "company@name.ng"
    },
    {
      city: "Nairobi",
      address1: "Westlands",
      address2: "1234 Kenyatta Avenue, Kenya",
      tel: "+254 (7) 123 4567 890",
      email: "company@name.com"

    },
    {
      city: "New York",
      address1: "Huntersville",
      address2: "957 Hill Suite 491, United States",
      tel: "+1 (123) 456 7890 1234",
      email: "company@name.com"
    },
  ]

  export const socialMediaLinks = [
    { icon: <FacebookIcon/>, url: "#" },
    { icon: <InstagramIcon/>, url: "https://www.instagram.com/igbokwe_chibueze_o/" },
    { icon: <TwitterIcon/>, url: "https://twitter.com/chisteeldomain" },
    { icon: <GithubIcon/>, url: "https://github.com/igbokwe-chibueze" },
    { icon: <DribbleIcon/>, url: "#" }
];
  