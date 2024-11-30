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
            },
            {
                id: 'visualDesign',
                text: 'Visual Design',
                offsetTop: 0
            },
            {
                id: 'finalDesigns',
                text: 'Final Designs',
                offsetTop: 0
            },
            {
                id: 'retrospective',
                text: 'Retrospective',
                offsetTop: 0
            },
            {
                id: 'hiddenFooter',
                text: 'hidden',
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
                        discovery: {
                            description: '\'By matching the server name with its "configuration state" and validating that pairing with the Ansible task stages, we established a fail-safe.\',',
                            heading: 'Fail-safe measures',
                            color: '#FFD700',
                            icon: '/icons/white-morethought.svg'
                        },
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
            },
            visualDesign: {
                heading: 'Unmistakeably Stadia, undeniably Google.',
                information: [
                    {
                        subheading: 'Combining the old and new.',
                        description: [
                            {
                                text: 'At Google’s scale of design, it would be redundant to create an entirely new design system for this project.',
                                break: true,
                                highlight: false
                            },
                            {
                                text: 'Instead, custom components were designed on a per-need basis, and',
                                break: false,
                                highlight: false
                            },
                            {
                                text: 'maximized the use of atomic Material Design elements and characteristics.',
                                break: true,
                                highlight: true
                            },
                            {
                                text: 'Though, there was room for some fun! In the spirit of being',
                                break: false,
                                highlight: false
                            },
                            {
                                text: 'forward-looking while also paying homage to the past',
                                break: false,
                                highlight: true
                            },
                            {
                                text: ', I fused together aspects of Material Design with Stadia’s design system (',
                                break: false,
                                highlight: false
                            },
                            {
                                text: 'Figure 6.0',
                                break: false,
                                highlight: true
                            },
                            {
                                text: ').',
                                break: true,
                                highlight: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '6.0'
                            }
                        ]
                    },
                    {
                        subheading: 'Cards — versatile and responsive.',
                        description: [
                            {
                                text: 'The card component was highly-critical from a content-organization perspective. It was designed to',
                                break: false,
                                highlight: false
                            },
                            {
                                text: 'prioritize readability while accounting for responsiveness, flexibility, and i18n.\n',
                                break: true,
                                highlight: true
                            },
                            {
                                text: 'I put a lot of emphasis on documenting design spec to foster smooth design-engineering collaboration.',
                                break: true,
                                highlight: false
                            },
                            {
                                text: 'It was also an opportunity to leverage Figma’s new component properties functionalities to greatly speed up collaboration with UXW (',
                                break: false,
                                highlight: false
                            },
                            {
                                text: 'Figure 6.1 & 6.2',
                                break: false,
                                highlight: true
                            },
                            {
                                text: ').',
                                break: true,
                                highlight: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                interactText: 'specs',
                                alt: 'Ansible project image',
                                interactiveAlt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                interactiveSrc: '/images/ansible-thumbnail-interactive.png',
                                type: HighlightType.INTERACTIVE,
                                number: '6.1'
                            },
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '6.2'
                            }
                        ]
                    },
                    {
                        subheading: 'Dialogs — valuably interruptive.',
                        description: [
                            {
                                text: "In the rare instance that something goes wrong, it was of utmost priority to",
                                break: false,
                                highlight: false
                            },
                            {
                                text: "communicate it clearly and suggest direct solutions.",
                                break: true,
                                highlight: true
                            },
                            {
                                text: "In the rare instance that something goes wrong, it was of utmost priority to communicate it clearly and suggest direct solutions.\n" +
                                    "\n" +
                                    "Center-aligned iconography and headings were used in tandem with subtle motion design to be more interruptive and draw greater attention (",
                                break: false,
                                highlight: false
                            },
                            {
                                text: "Figure 6.3",
                                break: false,
                                highlight: true
                            },
                            {
                                text: ").",
                                break: true,
                                highlight: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.LOOPVIDEO,
                                number: '6.3'
                            }
                        ]
                    },
                    {
                        subheading: 'Stepper — a visual method for passive orientation.',
                        description: [
                            {
                                text: 'Though small, it functioned to accurately represent the update flow and offer users with',
                                break: false,
                                highlight: false
                            },
                            {
                                text: 'visual indication for progress',
                                break: false,
                                highlight: true
                            },
                            {
                                text: 'and passive wayfinding.',
                                break: true,
                                highlight: false
                            },
                            {
                                text: 'As a component that neither existed within Material Design or Stadia’s design system, every atomic element and their combined states were intricately defined.',
                                break: true,
                                highlight: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.LOOPVIDEO,
                                number: '6.4'
                            },
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '6.4'
                            }
                        ]
                    },
                    {
                        subheading: 'Illustrations — recognizing but not overemphasizing the industrial design.',
                        description: [
                            {
                                text: 'The design direction of the illustrations focused on prioritizing',
                                break: false,
                                highlight: false
                            },
                            {
                                text: 'scannability and interpretation of relative button positioning.',
                                break: true,
                                highlight: true
                            },
                            {
                                text: 'This made the linework approach more favourable as',
                                break: false,
                                highlight: false
                            },
                            {
                                text: 'actions could easily take priority',
                                break: false,
                                highlight: true
                            },
                            {
                                text: 'over the controller itself (',
                                break: false,
                                highlight: false
                            },
                            {
                                text: 'Figure 6.5',
                                break: false,
                                highlight: true
                            },
                            {
                                text: ').',
                                break: true,
                                highlight: false
                            },
                            {
                                text: 'It also aligned greater with artifacts within Stadia\'s existing visual design ecosystem, such as those found on the controller\'s user manual (',
                                break: false,
                                highlight: false
                            },
                            {
                                text: 'Figure 6.6',
                                break: false,
                                highlight: true
                            },
                            {
                                text: ').',
                                break: true,
                                highlight: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                interactText: 'indicators',
                                alt: 'Ansible project image',
                                interactiveAlt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                interactiveSrc: '/images/ansible-thumbnail-interactive.png',
                                type: HighlightType.INTERACTIVE,
                                number: '6.5'
                            },
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '6.6'
                            }
                        ]
                    },
                    {
                        subheading: '',
                        description: [
                            {
                                text: 'Manually redrawing vector assets enabled greater control over colour, button sizing, and overall visual manipulation (',
                                break: false,
                                highlight: false
                            },
                            {
                                text: 'Figure 6.7 and 6.8',
                                break: false,
                                highlight: true
                            },
                            {
                                text: ').',
                                break: true,
                                highlight: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                interactText: 'annotations',
                                alt: 'Ansible project image',
                                interactiveAlt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                interactiveSrc: '/images/ansible-thumbnail-interactive.png',
                                type: HighlightType.INTERACTIVE,
                                number: '6.7'
                            }
                        ]
                    },
                    {
                        subheading: '',
                        description: [
                            {
                                text: 'The website\'s backdrop was a nod to Stadia\'s last UI update — featuring the Stadia emblem as a clipping mask against a blurred ellipse (',
                                break: false,
                                highlight: false
                            },
                            {
                                text: 'Figure 6.9',
                                break: false,
                                highlight: true
                            },
                            {
                                text: ').',
                                break: true,
                                highlight: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '6.9'
                            }
                        ]
                    },
                    {
                        subheading: '',
                        description: [
                            {
                                text: 'I collaborated closely with UXE to design and implement a concentric ring motion concept, representative of Bluetooth connectivity (',
                                break: false,
                                highlight: false
                            },
                            {
                                text: 'Figure 6.10',
                                break: false,
                                highlight: true
                            },
                            {
                                text: ').',
                                break: true,
                                highlight: false
                            },
                            {
                                text: 'By only adjusting fundamental size and colour properties, the animation was lightweight and',
                                break: false,
                                highlight: false
                            },
                            {
                                text: 'implementable purely with CSS transform.',
                                break: true,
                                highlight: true
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.LOOPVIDEO,
                                number: '6.10'
                            }
                        ]
                    }
                ]
            },
            finalDesign: {
                heading: 'An effortless experience',
                information: [
                    {
                        subheading: 'You kinda just click through it.',
                        description: [
                            {
                                text: 'For the most part, the firmware update process from start to end should take a user no longer than a minute — two tops (',
                                break: false,
                                highlight: false
                            },
                            {
                                text: 'Figure 7.0',
                                break: false,
                                highlight: true
                            },
                            {
                                text: ').',
                                break: true,
                                highlight: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.LOOPVIDEO,
                                number: '7.0'
                            },
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '7.1'
                            },
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '7.2'
                            },
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '7.3'
                            }
                        ]
                    },
                    {
                        subheading: 'Finishing touches from internal feedback.',
                        description: [
                            {
                                text: 'There were no major usability issues that came from our round of internal testing. In fact, ',
                                break: false,
                                highlight: false
                            },
                            {
                                text: 'over 98% of our internal testers had successfully updated their controllers and found the update process to be easy.',
                                break: true,
                                highlight: true
                            },
                            {
                                text: 'This meant that I could direct my focus on addressing feedback for a couple of edge cases.\n',
                                break: true,
                                highlight: false
                            },
                            {
                                text: 'Figure 7.4',
                                break: false,
                                highlight: true
                            },
                            {
                                text: 'addresses actions being hidden below the fold on small viewports with high zoom. The solution was to append a sticky actions container to the bottom of the viewport if it reaches a target minimum height.',
                                break: true,
                                highlight: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '7.4'
                            }
                        ]
                    },
                    {
                        subheading: '',
                        description: [
                            {
                                text: 'Figure 7.5',
                                break: false,
                                highlight: true
                            },
                            {
                                text: ' addresses feedback about the post-update experience being confusing — mainly regarding controller pairing. A "Get Started" dialog with pairing instructions was added.',
                                break: true,
                                highlight: false
                            }
                        ],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '7.5'
                            }
                        ]
                    }
                ]
            },
            retrospective: {
                heading: 'A bittersweet ending.',
                information: [
                    {
                        discovery: {
                            heading: 'A HUGE SUCCESS',
                            color: '#00A86B',
                            description: 'Over a million Stadia Controllers were updated to support Bluetooth mode, and that made a lot of people happy!',
                            icon: '/icons/green-rewind-badge.svg'
                        },
                        subheading: '',
                        description: [],
                        image: [
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '8.0'
                            },
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '8.1'
                            },
                            {
                                caption: 'Ansible project image',
                                alt: 'Ansible project image',
                                src: '/images/ansible-thumbnail.png',
                                type: HighlightType.IMAGE,
                                number: '8.2'
                            }
                        ]
                    },
                    {
                        subheading: 'Project Takeaways:',
                        description: [],
                        cards: [
                            {
                                icon: '/icons/green-thumbs-up.svg',
                                heading: 'Finding opportunities within constraints',
                                description: 'Viewing constraints from different perspectives helped brew new approaches to tackle other constraints.',
                            },
                            {
                                icon: '/icons/green-thumbs-up.svg',
                                heading: 'Leveraging existing resources',
                                description: 'Google\'s design resources were near unlimited — knowing where to find them and when to use them saved immense time and overhead.',
                            },
                            {
                                icon: '/icons/green-thumbs-up.svg',
                                heading: 'Collaboration is key',
                                description: 'Working closely with other teams ensured that the project was not only successful but also a learning experience for everyone involved.',
                            },
                            {
                                icon: '/icons/green-thumbs-up.svg',
                                heading: 'Iterate, iterate, iterate',
                                description: 'The project was a testament to the power of iteration — each iteration brought us closer to the final design.',
                            }
                        ]
                    }
                ]
            }
        }
    }
];

export default Items;