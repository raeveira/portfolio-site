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
            },
            {
                id: 'updateFlow',
                text: 'Update Flow',
                offsetTop: 0
            },
            {
                id: 'layoutPatterns',
                text: 'Layout Patterns',
                offsetTop: 0
            },
            {
                id: 'interactions',
                text: 'Interactions',
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
            highlightReel: {
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
                        highlight: false,
                        break: true
                    },
                    {
                        text: 'The project was a great success and I am proud of the work that we have done. I am looking forward to working on more projects like this in the future.',
                        highlight: true,
                        break: false
                    },
                    {
                        text: 'I am excited to see what the future holds for Ansible and how it can be used to improve the efficiency of Linux system installations.',
                        highlight: false,
                        break: false
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
                        highlight: false,
                        break: true
                    },
                    {
                        text: "The main challenge required my primary focus, but I needed to quickly learn and schedule time for Ansible to support my goals.",
                        highlight: true,
                        break: false
                    },
                    {
                        text: "Balancing these tasks required careful planning to prevent Ansible from disrupting the core objectives.",
                        highlight: false,
                        break: false
                    }
                ],
                points: [
                    {
                        highlightedText: "An aggressive two-month deadline, ",
                        text: "as we had to complete the setup before the primary project deadline.",
                        icon: "/icons/yellow-clock.svg"
                    },
                    {
                        highlightedText: "Balancing Ansible learning ",
                        text: "and scheduling without impacting the main challenge required careful planning.",
                        icon: "/icons/yellow-key.svg"
                    },
                    {
                        highlightedText: "Ansible's configuration needs added complexity, ",
                        text: "creating a side challenge in the project timeline.",
                        icon: "/icons/yellow-neutral-emoji.svg"
                    },
                    {
                        highlightedText: "The main focus remained on the primary challenge, ",
                        text: "making this a secondary but necessary effort.",
                        icon: "/icons/yellow-html-css.svg"
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
            updateFlow: {
                heading: 'The backbone of the project.',
                information: [
                    {
                        subheading: "You gotta start somewhere.",
                        description: [
                            {
                                text: 'The DevOps team provided me with a list of mandatory server setup instructions, which included an unconventional CLI interaction to configure Ansible settings',
                                highlight: false,
                                break: false
                            },
                            {
                                text: '(see Figure 3.0).',
                                highlight: true,
                                break: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '3.0'
                            }
                        ],
                    },
                    {
                        subheading: "Finding structure amidst the chaos.",
                        description: [
                            {
                                text: 'To navigate a complex set of Ansible setup instructions, I first focused on creating a ',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'sense of clear progress.',
                                highlight: true,
                                break: true
                            },
                            {
                                text: 'As shown in Figure 3.1',
                                highlight: true,
                                break: false
                            },
                            {
                                text: ', I categorized the instructions into four stages to reduce the cognitive load of processing all steps simultaneously.',
                                highlight: false,
                                break: true
                            },
                            {
                                text: 'Overly technical language was also simplified to make the instructions more accessible for a general audience.',
                                highlight: false,
                                break: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '3.1'
                            }
                        ],
                    },
                    {
                        subheading: 'Pinpointing the issues.',
                        description: [
                            {
                                text: 'This structured approach also revealed several heuristic issues, primarily around confusing hardware interactions and missing edge case considerations.',
                                highlight: false,
                                break: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '3.2'
                            }
                        ],
                        points: [
                            {
                                text: 'The controller needed to be powered off, with no "visible" feedback from the status light, making it difficult to confirm the hardware\'s readiness.',
                                icon: '/icons/forbidden.svg',
                                highlightedText: ''
                            },
                            {
                                text: 'The Chrome dialog interaction had to be repeated twice, adding an extra step to the process.',
                                icon: '/icons/forbidden.svg',
                                highlightedText: ''
                            },
                        ],
                        additionalPoints: [
                            {
                                text: 'Unclear if the server was offline or simply unreachable.',
                                icon: '/icons/red-low-battery.svg',
                                highlightedText: ''
                            },
                            {
                                text: 'Network cables sometimes lacked proper data connectivity.',
                                icon: '/icons/red-no-usb.svg',
                                highlightedText: ''
                            },
                            {
                                text: 'No validation to confirm successful task execution or track progress.',
                                icon: '/icons/red-arrow-right.svg',
                                highlightedText: ''
                            },
                            {
                                text: '"Deploy" and "Configure" phases appeared identical, leading to potential confusion.',
                                icon: '/icons/red-equals.svg',
                                highlightedText: ''
                            }
                        ]
                    },
                    {
                        subheading: 'Getting the quick fixes in.',
                        description: [
                            {
                                text: 'Most issues could be resolved by enhancing instructions and providing clearer feedback (',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'Figure 3.3',
                                highlight: true,
                                break: false
                            },
                            {
                                text: ') — aiming to',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'strengthen the perception',
                                highlight: true,
                                break: false
                            },
                            {
                                text: ' of progress throughout the setup.',
                                highlight: false,
                                break: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '3.3'
                            }
                        ],
                        points: [
                            {
                                text: 'Pair text instructions with clear visual guides and specify when the server should be offline.',
                                icon: '/icons/green-controller.svg',
                                highlightedText: ''
                            },
                            {
                                text: 'Display a success message and allow users to proceed to the next task, reinforcing the sense of progression.',
                                icon: '/icons/green-icon-success.svg',
                                highlightedText: ''
                            },
                            {
                                text: 'Collaborated with UXW to draft concise and user-friendly copy for better clarity.',
                                icon: '/icons/green-icon-writing.svg',
                                highlightedText: ''
                            }
                        ],
                        additionalPoints: [
                            {
                                text: 'Is it possible to surface server configuration errors before proceeding, using a static Ansible solution?',
                                icon: '/icons/white-morethought.svg',
                                highlightedText: ''
                            },
                            {
                                text: 'Can we verify if an Ansible task was completed correctly with a static solution?',
                                icon: '/icons/white-morethought.svg',
                                highlightedText: ''
                            }
                        ]
                    },
                    {
                        subheading: 'The Ansible playbook — once a constraint, now a streamlined solution.',
                        description: [
                            {
                                text: 'As I was dry-running the Ansible playbook, I noticed that the server would appear under a different name each time the task was executed.',
                                highlight: false,
                                break: false
                            }
                        ],
                        discovery: 'By matching the server name with its "configuration state" and validating that pairing with the Ansible task stages, we established a fail-safe.',
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '3.4'
                            }
                        ]
                    },
                    {
                        subheading: 'More is less — verify.',
                        description: [
                            {
                                text: 'I doubled down on the fail-safe functionality and worked with our engineering team to introduce a',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'preliminary verification phase',
                                highlight: true,
                                break: false
                            },
                            {
                                text: '(',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'Figure 3.5',
                                highlight: true,
                                break: false
                            },
                            {
                                text: ').',
                                highlight: false,
                                break: true
                            },
                            {
                                text: 'By requiring verification before executing the Ansible playbook, we can surface server issues immediately and help users become familiar with the process earlier.',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'Now,',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'the update process is resilient, ',
                                highlight: true,
                                break: false
                            },
                            {
                                text: 'allowing users to resume where they left off if disconnected — ensuring their systems can\'t be \"bricked.\"',
                                highlight: false,
                                break: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '3.5'
                            }
                        ],
                    }
                ]
            },
            LayoutPatterns: {
                heading: 'Reinforcing Ansible with Verification and Fail-Safe Measures',
                information: [
                    {
                        subheading: 'Keepin\' it old school — responsive layout grids.',
                        description: [
                            {
                                text: 'A standard set of layout grids and breakpoints (',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'Figure 4.0',
                                highlight: true,
                                break: false
                            },
                            {
                                text: '), was critical in ensuring we could',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'design and build quickly and consistently.',
                                highlight: true,
                                break: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                interactiveAlt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                interactiveSrc: '/images/ansible-thumbnail-interactive.png',
                                interactText: 'Interactive Mode',
                                type: HighlightType.INTERACTIVE,
                                number: '4.0'
                            }
                        ]
                    },
                    {
                        subheading: 'Boilerplate layout — A question of readability vs. glanceability.',
                        description: [
                            {
                                text: 'The first iteration (',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'Figure 4.1',
                                highlight: true,
                                break: false
                            },
                            {
                                text: ' was an attempt at amplifying the perception of progression — ',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'placing high emphasis on textual instructions supported by natural reading behaviour.',
                                highlight: true,
                                break: true
                            },
                            {
                                text: 'However, early internal feedback noted that it was too distracting while the current task was not emphasized enough. This led to a second iteration (',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'Figure 4.2',
                                highlight: true,
                                break: false
                            },
                            {
                                text: ') — ',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'which placed glanceable illustrations at the forefront.',
                                highlight: true,
                                break: true
                            },
                            {
                                text: 'One layout wasn\'t necessarily better than the other per se, but reducing the amount of content seen at any given moment helped reduce potential for error.',
                                highlight: false,
                                break: true

                            },
                            {
                                text: 'Ultimately, the second iteration was chosen because of a reduced engineering overhead and layout simplicity.',
                                highlight: true,
                                break: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '4.1'
                            },
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '4.2'
                            }
                        ],
                        points: [
                            {
                                text: 'Focus is put on the process as a whole — motivates users to complete the update',
                                icon: '/icons/white-123.svg',
                                highlightedText: ''
                            },
                            {
                                text: 'Textual instructions first, illustrations become supplementary elements',
                                icon: '/icons/white-text.svg',
                                highlightedText: ''
                            },
                            {
                                text: 'Greater readibility — improved instruction retention, reduced confusion',
                                icon: '/icons/white-book.svg',
                                highlightedText: ''
                            }
                        ],
                        additionalPoints: [
                            {
                                text: 'Focus is put on the current action at hand — one thing at a time, less distraction',
                                icon: '/icons/white-math-block.svg',
                                highlightedText: ''
                            },
                            {
                                text: 'Illustrations become imperative to the experience and drives greater tactility',
                                icon: '/icons/white-controller.svg',
                                highlightedText: ''
                            },
                            {
                                text: 'Greater scannability — just look and do, read if needed',
                                icon: '/icons/white-eye.svg',
                                highlightedText: ''
                            }
                        ]
                    },
                    {
                        subheading: 'The Chrome dialog layout — breaking the rhythm.',
                        description: [
                            {
                                text: 'The primary CTA was relocated to help bring focus to initiating the Chrome dialog interaction when it was required.',
                                highlight: false,
                                break: true
                            },
                            {
                                text: 'Disabling instinctive progression actions also further pushed the necessity of the interaction.',
                                highlight: false,
                                break: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                interactiveAlt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                interactiveSrc: '/images/ansible-thumbnail-interactive.png',
                                interactText: 'process flow',
                                type: HighlightType.INTERACTIVE,
                                number: '4.3'
                            }
                        ]
                    }
                ]
            },
            interactions: {
                heading: 'It didn\'t have to feel like a static website.',
                information: [
                    {
                        subheading: 'Process of unlocking — failure prevention vs. ease of use.',
                        description: [
                            {
                                text: 'Unlocking the controller to access the “boot menu” had inherently clunky origins by design. My initial approach was focused on failure prevention, through walking users through each micro-action one after another.\n',
                                highlight: false,
                                break: true
                            },
                            {
                                text: 'Though it appeared intuitive in theory, it was actually',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'unnecessarily cumbersome in physical practice',
                                highlight: true,
                                break: false
                            },
                            {
                                text: 'with actual hardware (',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'Figure 5.0',
                                highlight: true,
                                break: false
                            },
                            {
                                text: ').',
                                highlight: false,
                                break: true
                            },
                            {
                                text: 'I made the pivot to an approach more conscious of hardware interactions and ease of use (',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'Figure 5.1',
                                highlight: true,
                                break: false
                            },
                            {
                                text: ').',
                                highlight: false,
                                break: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.LOOPVIDEO,
                                number: '5.0'
                            },
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.LOOPVIDEO,
                                number: '5.1'
                            }
                        ],
                        points: [
                            {
                                text: 'Ensured that users carefully read, follow, and verify completion of the instructions',
                                icon: '/icons/green-thumbs-up.svg',
                                highlightedText: ''
                            },
                            {
                                text: 'One thing at a time — low cognitive load',
                                icon: '/icons/green-thumbs-up.svg',
                                highlightedText: ''
                            },
                        ],
                        additionalPoints: [
                            {
                                text: 'A single page, no extra actions',
                                icon: '/icons/green-thumbs-up.svg',
                                highlightedText: ''
                            },
                            {
                                text: 'Decent cognitive load — so long as instructions were formatted and structured well',
                                icon: '/icons/green-thumbs-up.svg',
                                highlightedText: ''
                            },
                        ],
                        additionalPoints1: [
                            {
                                text: 'A much longer process — perhaps unnecessary',
                                icon: '/icons/red-thumbs-down.svg',
                                highlightedText: ''
                            },
                            {
                                text: 'Having to go back and forth between controller and mouse/touchpad',
                                icon: '/icons/red-thumbs-down.svg',
                                highlightedText: ''
                            },
                        ],
                        additionalPoints2: [
                            {
                                text: 'Fully reliant on user-descretion to follow instructions carefully',
                                icon: '/icons/red-thumbs-down.svg',
                                highlightedText: ''
                            }
                        ],
                    },
                    {
                        subheading: 'Understanding the need for tactility.',
                        description: [
                            {
                                text: 'I opted for an illustration-led card layout to make the experience feel more tactile and interactive rather than exhaustively reading text from a list. (',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'Figure 5.2',
                                highlight: true,
                                break: false
                            },
                            {
                                text: ').',
                                highlight: false,
                                break: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '5.2'
                            }
                        ],
                    },
                    {
                        subheading: 'Wait, was something actually downloaded?',
                        description: [
                            {
                                text: 'In the back-end, downloading the update took a fraction of a second, which in theory was a good thing. However, seeing it on the screen (',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'Figure 5.3',
                                highlight: true,
                                break: false
                            },
                            {
                                text: ') gave the impression of ',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'abruptness, and ultimately distrust',
                                highlight: true,
                                break: false
                            },
                            {
                                text: 'on whether the download was successful.',
                                highlight: false,
                                break: true
                            },
                            {
                                text: 'I worked with our engineering team to implement a ',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'deliberate loading delay ',
                                highlight: true,
                                break: false
                            },
                            {
                                text: ')',
                                highlight: false,
                                break: false
                            },
                            {
                                text: 'Figure 5.4',
                                highlight: true,
                                break: false
                            },
                            {
                                text: ') to convey a more explicit change affordance.',
                                highlight: false,
                                break: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                interactText: 'process flow',
                                type: HighlightType.LOOPVIDEO,
                                number: '5.3'
                            },
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                interactText: 'process flow',
                                type: HighlightType.LOOPVIDEO,
                                number: '5.4'
                            }
                        ],
                        points: [
                            {
                                text: 'No time wasted, true to what\'s happening',
                                icon: '/icons/green-thumbs-up.svg',
                                highlightedText: ''
                            },
                            {
                                text: 'Potential of user doubt and distrust',
                                icon: '/icons/red-thumbs-down.svg',
                                highlightedText: ''
                            }
                        ],
                        additionalPoints: [
                            {
                                text: 'Feedback to manage expectation and build anticipation — it just feels like it worked',
                                icon: '/icons/green-thumbs-up.svg',
                                highlightedText: ''
                            },
                            {
                                text: 'A bit of extra time to wait',
                                icon: '/icons/red-thumbs-down.svg',
                                highlightedText: ''
                            }
                        ],
                    }
                ]
            }
        }
    }
];

export default Items;