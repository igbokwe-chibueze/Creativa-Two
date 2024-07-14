import { asianman, blackman, blackwoman, blackwoman2, indianman, whiteman, whitewoman } from "../assets/pngs";
import { BriefcaseIcon, DribbleIcon, FacebookIcon, GithubIcon, InstagramIcon, PresentationIcon, ScaleIcon, TwitterIcon } from "./Icons";

export const navLinks = [
    { href: 'hero', text: 'Hero' },
    { href: 'company', text: 'Company' },
    { href: 'features', text: 'Features' },
    { href: 'testimonials', text: 'Testimonials' },
    { href: 'cta', text: 'CTA' },
    { href: 'profile', text: 'Profile' },
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

export const testimonialsData = [
  {
    subject:"1 It was a great experience!",
    body: "Creativa has been a game-changer for our development process. The extensive library of predesigned components and pages, from simple forms to complex dashboards, has made building our SaaS applications faster and easier. ",
    author: "1 Mwangi Njoroge",
    position: "CEO at InnovateTech",
    image: blackman,
  },
  {
    subject:"2 Best product!",
    body: "The versatility and ease of use of Creativa are unmatched. It has streamlined our development process, making it easier to create stunning applications quickly.",
    author: "2 Sophia Carter",
    position: "CTO at FutureSoft",
    image: whitewoman,
  },
  {
    subject:"3 Great design!",
    body: "Creativa has revolutionized our approach to web design. The pre-built components are incredibly intuitive and save us so much time. Highly recommend for any development team.",
    author: "3 Chioma Adesina",
    position: "Lead Developer at WebWave",
    image: blackwoman,
  },
  {
    subject:"4 Just awesome!",
    body: "We integrated Creativa into our workflow, and the results have been phenomenal. The templates are modern and fully customizable, making our projects stand out.",
    author: "4 David Johnson",
    position: "Product Manager at NexaWorks",
    image: whiteman,
  },
  {
    subject:"5 Fantastic!",
    body: "Creativa offers an exceptional library of components that have significantly reduced our development time. It's a game-changer for our team's productivity.",
    author: "5 Amina Okoro",
    position: "Head of Development at CodeCrafters",
    image: blackwoman2,
  },
];

export const teamMembersData = [
  {
    name: "Chisom Abiola",
    position: "CEO",
    image: blackwoman2,
    email: "chisom.abiola@creativa.com",
    tel: "+234 701 234 56780"
  },
  {
    name: "Fatima Okoye",
    position: "CTO",
    image: blackwoman,
    email: "fatima.okoye@creativa.com",
    tel: "+234 701 234 56790"
  },
  {
    name: "Jean Martin",
    position: "CFO",
    image: whitewoman,
    email: "jean.martin@creativa.com",
    tel: "+234 701 234 56800"
  },
  {
    name: "Li Tanaka",
    position: "Lead Developer",
    image: asianman,
    email: "li.tanaka@creativa.com",
    tel: "+234 701 234 56810"
  },
  {
    name: "Aarav Ramasamy",
    position: "Project Manager",
    image: indianman,
    email: "aarav.ramasamy@creativa.com",
    tel: "+234 701 234 56820"
  },
  {
    name: "Wanjiku Abdi",
    position: "UX Designer",
    image: blackman,
    email: "wanjiku.abdi@creativa.com",
    tel: "+234 701 234 56830"
  },
];




  