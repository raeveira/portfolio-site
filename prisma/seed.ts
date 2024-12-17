// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const project = await prisma.project.create({
            data: {
                text: 'Ansible2',
                heading: 'Ansible2',
                company: 'school',
                year: '\'24',
                description: 'The automation and acceleration of Linux system installations',
                image: '/images/ansible-thumbnail.png',
                link: '/projects/ansible',
                color_from: '#ffffff4d',
                color_to: '#0000',
                SidebarItems: {
                    create: [
                        {text: 'hidden', offsetTop: 0},
                        {text: 'Overview', offsetTop: 0},
                        {text: 'Highlights', offsetTop: 0},
                        {text: 'Context', offsetTop: 0},
                        {text: 'Problem', offsetTop: 0},
                        {text: 'Update Flow', offsetTop: 0},
                        {text: 'Layout Patterns', offsetTop: 0},
                        {text: 'Interactions', offsetTop: 0},
                        {text: 'Visual Design', offsetTop: 0},
                        {text: 'Final Designs', offsetTop: 0},
                        {text: 'Retrospective', offsetTop: 0},
                        {text: 'hidden', offsetTop: 0}
                    ]
                },
                Content: {
                    create: {
                        overview: {
                            create: {
                                role: 'Software Developer',
                                tasks: 'Playbook Development, VM Provisioning, Configuration Management, Automation Scripting, Role Creation, Task Orchestration',
                                team: 'Rae Valen, PM',
                                timeline: '1 Month',
                                status: 'Launched in September 2024',
                                overview:
                                    'Following recent updates to the Ansible school project, questions remained about what would happen with the project\'s resources — whether they could still be applied effectively or risk becoming obsolete. I took charge of designing and implementing automation playbooks for setting up and managing virtual machines, which helped me understand the deployment process better and play an important role in the project\'s success. Upon submitting the project, I received enthusiastic feedback from my teachers, who expressed pride in my work setting up an Apache server with PHP and a MariaDB database across different Linux distributions using Ansible.'
                            }
                        },
                        highlightReel: {
                            create: {
                                calloutText: 'An end-to-end setup experience for configuring Apache with PHP and a MariaDB database across various Linux distributions to ensure seamless functionality for my project.',
                                moneyshots:
                                    {
                                        create: {
                                            caption: 'Ansible project image',
                                            alt:
                                                'Ansible project image',
                                            src:
                                                '/images/ansible-thumbnail.png',
                                            type:
                                                'IMAGE'
                                        }
                                    }
                            }
                        }
                        ,
                        context: {
                            create: {
                                heading: 'Wrapping up strong with Ansible for Linux deployment.',
                                subHeading:
                                    'The automation and acceleration of Linux system installations',
                                description:
                                    {
                                        create: [
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
                                        ]
                                    }
                                ,
                                images: {
                                    create: {
                                        caption: 'Ansible project image',
                                        alt:
                                            'Ansible project image',
                                        src:
                                            '/images/ansible-thumbnail.png',
                                        type:
                                            'IMAGE'
                                    }
                                }
                            }
                        }
                        ,
                        problem: {
                            create: {
                                heading: 'This wasn\'t just going to be a typical linux installation.',
                                subHeading:
                                    'An Ansible Learning Curve',
                                challenge:
                                    'Automate the setup and configuration of a Linux server using Ansible.',
                                solutionMethod: 'Ansible Playbooks',
                                solutionDescription: {
                                    create: [
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
                                        },
                                    ],
                                },
                                description: {
                                    create: [
                                        {
                                            text: 'Working with Ansible brought in an unexpected layer of complexity.',
                                            highlight: false,
                                            break: true,
                                        },
                                        {
                                            text: 'The main challenge required my primary focus, but I needed to quickly learn and schedule time for Ansible to support my goals.',
                                            highlight: true,
                                            break: false,
                                        },
                                        {
                                            text: 'Balancing these tasks required careful planning to prevent Ansible from disrupting the core objectives.',
                                            highlight: false,
                                            break: false,
                                        },
                                    ],
                                },
                                points: {
                                    create: [
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
                                    ]
                                }
                                ,
                                images: {
                                    create: {
                                        caption: 'Ansible project image',
                                        alt:
                                            'Ansible project image',
                                        src:
                                            '/images/ansible-thumbnail.png',
                                        type:
                                            'IMAGE'
                                    }
                                }
                            }
                        }
                        ,
                        updateFlow: {
                            create: {
                                heading: 'The backbone of the project.',
                                information:
                                    {
                                        create: [
                                            {
                                                subHeading: "You gotta start somewhere.",
                                                description: {
                                                    create: [
                                                        {
                                                            text: 'The DevOps team provided me with a list of mandatory server setup instructions, which included an unconventional CLI interaction to configure Ansible settings',
                                                            highlight: false,
                                                            break: false
                                                        },
                                                        {text: '(see Figure 3.0).', highlight: true, break: false}
                                                    ]
                                                },
                                                image: {
                                                    create: {
                                                        caption: 'Ansible project image',
                                                        alt: 'Ansible project image',
                                                        src: '/images/ansible-thumbnail.png',
                                                        type: 'IMAGE',
                                                        number: '3.0'
                                                    }
                                                }
                                            },
                                            {
                                                subHeading: "Finding structure amidst the chaos.",
                                                description: {
                                                    create: [
                                                        {
                                                            text: 'To navigate a complex set of Ansible setup instructions, I first focused on creating a ',
                                                            highlight: false,
                                                            break: false
                                                        },
                                                        {text: 'sense of clear progress.', highlight: true, break: true},
                                                        {text: 'As shown in Figure 3.1', highlight: true, break: false},
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
                                                    ]
                                                },
                                                image: {
                                                    create: {
                                                        caption: 'Ansible project image',
                                                        alt: 'Ansible project image',
                                                        src: '/images/ansible-thumbnail.png',
                                                        type: 'IMAGE',
                                                        number: '3.1'
                                                    }
                                                }
                                            }
                                        ]
                                    }
                            }
                        }
                        ,
                        layoutPatterns: {
                            create: {
                                heading: 'Reinforcing Ansible with Verification and Fail-Safe Measures',
                                information:
                                    {
                                        create: [
                                            {
                                                subHeading: 'Keepin\' it old school — responsive layout grids.',
                                                description: {
                                                    create: [
                                                        {
                                                            text: 'A standard set of layout grids and breakpoints (',
                                                            highlight: false,
                                                            break: false
                                                        },
                                                        {text: 'Figure 4.0', highlight: true, break: false},
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
                                                    ]
                                                },
                                                image: {
                                                    create: {
                                                        caption: 'Ansible project image',
                                                        alt: 'Ansible project image',
                                                        src: '/images/ansible-thumbnail.png',
                                                        interactiveText: 'Click here to view the interactive image',
                                                        interactiveAlt: 'Ansible project image',
                                                        interactiveSrc: '/images/ansible-thumbnail-interactive.png',
                                                        type: 'INTERACTIVE',
                                                        number: '4.0'
                                                    }
                                                }
                                            }
                                        ]
                                    }
                            }
                        }
                        ,
                        interactions: {
                            create: {
                                heading: 'It didn\'t have to feel like a static website.',
                                information: {
                                    create: [
                                        {
                                            subHeading: 'Process of unlocking — failure prevention vs. ease of use.',
                                            description: {
                                                create: [
                                                    {
                                                        text: 'Unlocking the controller to access the "boot menu" had inherently clunky origins by design. My initial approach was focused on failure prevention, through walking users through each micro-action one after another.\n',
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
                                                    {text: 'with actual hardware (', highlight: false, break: false},
                                                    {text: 'Figure 5.0', highlight: true, break: false},
                                                    {text: ').', highlight: false, break: true}
                                                ]
                                            },
                                            image: {
                                                create: {
                                                    caption: 'Ansible project image',
                                                    alt: 'Ansible project image',
                                                    src: '/images/ansible-thumbnail.png',
                                                    type: 'LOOPVIDEO',
                                                    number: '5.0'
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                        ,
                        visualDesign: {
                            create: {
                                heading: 'Unmistakeably Stadia, undeniably Google.',
                                information:
                                    {
                                        create: [
                                            {
                                                subHeading: 'Combining the old and new.',
                                                description: {
                                                    create: [
                                                        {
                                                            text: 'At Google\'s scale of design, it would be redundant to create an entirely new design system for this project.',
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
                                                        }
                                                    ]
                                                },
                                                image: {
                                                    create: {
                                                        caption: 'Ansible project image',
                                                        alt: 'Ansible project image',
                                                        src: '/images/ansible-thumbnail.png',
                                                        type: 'IMAGE',
                                                        number: '6.0'
                                                    }
                                                }
                                            }
                                        ]
                                    }
                            }
                        }
                        ,
                        finalDesign: {
                            create: {
                                heading: 'An effortless experience',
                                information:
                                    {
                                        create: [
                                            {
                                                subHeading: 'You kinda just click through it.',
                                                description: {
                                                    create: [
                                                        {
                                                            text: 'For the most part, the firmware update process from start to end should take a user no longer than a minute — two tops (',
                                                            break: false,
                                                            highlight: false
                                                        },
                                                        {text: 'Figure 7.0', break: false, highlight: true},
                                                        {text: ').', break: true, highlight: false}
                                                    ]
                                                },
                                                image: {
                                                    create: {
                                                        caption: 'Ansible project image',
                                                        alt: 'Ansible project image',
                                                        src: '/images/ansible-thumbnail.png',
                                                        type: 'LOOPVIDEO',
                                                        number: '7.0'
                                                    }
                                                }
                                            }
                                        ]
                                    }
                            }
                        }
                        ,
                        retrospective: {
                            create: {
                                heading: 'A bittersweet ending.',
                                information:
                                    {
                                        create: [
                                            {
                                                subHeading: 'Project Takeaways:',
                                                description: {
                                                    create: []
                                                },
                                                cards: {
                                                    create: [
                                                        {
                                                            icon: '/icons/green-thumbs-up.svg',
                                                            heading: 'Finding opportunities within constraints',
                                                            description: 'Viewing constraints from different perspectives helped brew new approaches to tackle other constraints.'
                                                        },
                                                        {
                                                            icon: '/icons/green-thumbs-up.svg',
                                                            heading: 'Leveraging existing resources',
                                                            description: 'Google\'s design resources were near unlimited — knowing where to find them and when to use them saved immense time and overhead.'
                                                        },
                                                        {
                                                            icon: '/icons/green-thumbs-up.svg',
                                                            heading: 'Collaboration is key',
                                                            description: 'Working closely with other teams ensured that the project was not only successful but also a learning experience for everyone involved.'
                                                        },
                                                        {
                                                            icon: '/icons/green-thumbs-up.svg',
                                                            heading: 'Iterate, iterate, iterate',
                                                            description: 'The project was a testament to the power of iteration — each iteration brought us closer to the final design.'
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                            }
                        }
                    }
                }
            }
        })
    ;

    console.log('Seeding completed successfully');
    console.log("Created project: ", project.id);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
