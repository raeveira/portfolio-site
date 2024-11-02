import ItemIdentifier from "@/types/ItemIdentifier";
import { HighlightType } from "@/types/HighlightImages";

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
            }
        }
    }
];

export default Items;