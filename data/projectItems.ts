import ItemIdentifier from "@/types/ItemIdentifier";
import {HighlightType} from "@/types/HighlightImages";

const Items: ItemIdentifier[] = [
    {
        id: 1,
        text: 'Ansible',
        heading: 'Ansible',
        company: 'school',
        year: '\'24',
        description: 'The automation and acceleration of Linux system installations',
        image: '/images/ansible-thumbnail.png',
        link: '/projects/ansible',
        color_from: '#ffffff4d',
        color_to: '#0000',
        SidebarItem: [
            {
                id: 'hidden',
                text: 'hidden',
                offsetTop: 0
            },
            {
                id: 'overview',
                text: 'Overview',
                offsetTop: 0
            },
            {
                id: 'highlights',
                text: 'Highlights',
                offsetTop: 0
            },
            {
                id: 'context',
                text: 'Context',
                offsetTop: 0
            },
            {
                id: 'problem',
                text: 'Problem',
                offsetTop: 0
            }
        ],
        content: {
            overview: {
                role: 'Software Developer',
                tasks: 'Playbook Development, VM Provisioning, Configuration Management, Automation Scripting, Role Creation, Task Orchestration',
                team: [
                    'Rae Valen, PM',
                ],
                timeline: '1 Month',
                status: 'Launched in September 2024',
                overview: [
                    'Following recent updates to the Ansible school project, questions remained about what would happen with the project’s resources — whether they could still be applied effectively or risk becoming obsolete.',
                    'I took charge of designing and implementing automation playbooks for setting up and managing virtual machines, which helped me understand the deployment process better and play an important role in the project\'s success.',
                    'Upon submitting the project, I received enthusiastic feedback from my teachers, who expressed pride in my work setting up a Apache server with PHP and a MariaDB database across different Linux distributions with use of Ansible.',
                ],
            },
            hightlightReel: {
                calloutText: 'An end-to-end setup experience for configuring Apache with PHP and a MariaDB database across various Linux distributions to ensure seamless functionality for my project.',
                moneyshots: [
                    {
                        caption: 'Ansible project image',
                        alt: 'Ansible project image',
                        src: '/images/ansible-thumbnail.png',
                        type: HighlightType.IMAGE,
                    }
                ]
            },
            context: {
                heading: 'Wrapping up strong with Ansible for Linux deployment.',
                subheading: 'The automation and acceleration of Linux system installations',
                description: [
                    {
                        text: 'The Ansible project was a great opportunity to learn about the automation and acceleration of Linux system installations. It was a great experience to work with the team and learn from each other.',
                        highlight: false
                    },
                    {
                        text: 'The project was a great success and I am proud of the work that we have done. I am looking forward to working on more projects like this in the future.',
                        highlight: true
                    },
                    {
                        text: 'I am excited to see what the future holds for Ansible and how it can be used to improve the efficiency of Linux system installations.',
                        highlight: false
                    }
                ],
                images: [
                    {
                        caption: 'Ansible project image',
                        alt: 'Ansible project image',
                        src: '/images/ansible-thumbnail.png',
                        type: HighlightType.IMAGE,
                    }
                ]
            },
            problem: {
                heading: 'This wasn\'t just going to be a typical linux installation.',
                subheading: 'An Ansible Learning Curve',
                challenge: 'Automate the setup and configuration of a Linux server using Ansible.',
                solutionMethod: 'DevOps Development Methodologies: ',
                solutionDescription: [
                    {
                        heading: 'Plan',
                        icons: '/icons/green-stars-badge.svg',
                        description: 'Outline the server requirements and automation goals',
                    },
                    {
                        heading: 'Code',
                        icons: '/icons/green-rewind-badge.svg',
                        description: 'Write playbooks and scripts to define server configurations.',
                    },
                    {
                        heading: 'Build',
                        icons: '/icons/green-rewind-badge.svg',
                        description: 'Deploy the server and apply configurations using Ansible.',
                    },
                    {
                        heading: 'Test',
                        icons: '/icons/green-emoji-badge.svg',
                        description: 'Verify that the server is configured correctly and meets requirements.',
                    }
                ],
                description: [
                    {
                        text: "Working with Ansible brought in an unexpected layer of complexity.",
                        highlight: false
                    },
                    {
                        text: "The main challenge required my primary focus, but I needed to quickly learn and schedule time for Ansible to support my goals.",
                        highlight: true
                    },
                    {
                        text: "Balancing these tasks required careful planning to prevent Ansible from disrupting the core objectives.",
                        highlight: false
                    }
                ],
                points: [
                    {highlightedText: "An aggressive two-month deadline, " ,text: "as we had to complete the setup before the primary project deadline.", icon: "/icons/yellow-clock.svg"},
                    {highlightedText: "Balancing Ansible learning " ,text: "and scheduling without impacting the main challenge required careful planning.", icon: "/icons/yellow-key.svg"},
                    {highlightedText: "Ansible's configuration needs added complexity, ", text: "creating a side challenge in the project timeline.", icon: "/icons/yellow-neutral-emoji.svg"},
                    {highlightedText: "The main focus remained on the primary challenge, ", text: "making this a secondary but necessary effort.", icon: "/icons/yellow-html-css.svg"}
                ],
                images: [
                    {
                        caption: 'Ansible project image',
                        alt: 'Ansible project image',
                        src: '/images/ansible-thumbnail.png',
                        type: HighlightType.IMAGE,
                    }
                ]
            }
        }
    }
];

export default Items;