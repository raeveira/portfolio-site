// eslint-disable-next-line @typescript-eslint/no-require-imports
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const project = await prisma.project.create({
        data: {
            text: 'Mail App',
            heading: 'Mail App',
            company: 'Personal Project',
            year: '\'25',
            description: 'A modern, secure, and user-friendly email client',
            image: '/images/mail-app/thumbnail.png',
            link: '/projects/mail-app',
            color_from: '#4a90e2',
            color_to: '#1e3a8a',
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
                            role: 'Full-Stack Developer',
                            tasks: 'Frontend Development, Backend Integration, Security Implementation, UI/UX Design',
                            team: 'Raeveira',
                            timeline: '3 Months', // TODO: add timeline, started at 24-03-2025
                            status: 'Launched in March 2025', // TODO: Add actual launch date
                            overview:
                                'mail.raeveira.nl is a personal project aimed at creating a modern, secure, and user-friendly email client. This web-based application offers a seamless email experience with a focus on privacy and efficiency. The project showcases my skills in full-stack development, from crafting an intuitive user interface to implementing robust backend systems and security measures.'
                        }
                    },
                    highlightReel: {
                        create: {
                            calloutText: 'A feature-rich email client that prioritizes user privacy and offers a clean, intuitive interface for managing emails efficiently.',
                            moneyshots:
                                {
                                    create: {
                                        caption: 'Mail App Dashboard',
                                        alt: 'Screenshot of Mail App Dashboard',
                                        src: '/images/mail-app/dashboard.png',
                                        type: 'IMAGE'
                                    }
                                }
                        }
                    },
                    context: {
                        create: {
                            heading: 'Building a Secure and Efficient Email Client',
                            subHeading:
                                'A focus on user experience and data protection.',
                            description:
                                {
                                    create: [
                                        {
                                            text: 'The Mail App was developed to address the growing need for secure email communication. It was an exciting opportunity to learn about modern web technologies while focusing on user privacy.',
                                            highlight: false,
                                            break: true
                                        },
                                        {
                                            text: 'I am proud of the work done in creating a platform that users can trust for their communication needs.',
                                            highlight: true,
                                            break: false
                                        },
                                        {
                                            text: 'Looking forward, I aim to expand its features and improve performance based on user feedback.',
                                            highlight: false,
                                            break: false
                                        }
                                    ]
                                },
                            images: {
                                create: {
                                    caption: 'Mail App Context Image',
                                    alt:
                                        'Overview of Mail App Context',
                                    src:
                                        '/images/mail-app/context.png',
                                    type:
                                        'IMAGE'
                                }
                            }
                        }
                    },
                    problem: {
                        create: {
                            heading: 'Addressing the Challenges of Email Security.',
                            subHeading:
                                'Creating a reliable email client amidst security concerns.',
                            challenge:
                                'Develop a secure email client that protects user data while providing an intuitive experience.',
                            solutionMethod:
                                'Implementing strong encryption and user-friendly design principles.',
                            solutionDescription:
                                {
                                    create:
                                        [
                                            {
                                                heading:
                                                    'Research',
                                                icons:
                                                    '/icons/green-stars-badge.svg',
                                                description:
                                                    'Investigate best practices in email security and user experience design.',
                                            },
                                            {
                                                heading:
                                                    'Development',
                                                icons:
                                                    '/icons/green-rewind-badge.svg',
                                                description:
                                                    'Build the application using modern web technologies with security as a priority.',
                                            },
                                            {
                                                heading:
                                                    'Testing',
                                                icons:
                                                    '/icons/green-emoji-badge.svg',
                                                description:
                                                    'Conduct thorough testing to ensure functionality and security before launch.',
                                            },
                                        ],
                                },
                            description:
                                {
                                    create:
                                        [
                                            {
                                                text:
                                                    'The main challenge was to balance security features with usability. I needed to ensure that users could easily navigate the app while having their data protected.',
                                                highlight:
                                                    false,
                                                break:
                                                    true,
                                            },
                                            {
                                                text:
                                                    'This required careful planning and execution to avoid overwhelming users with complex security protocols.',
                                                highlight:
                                                    true,
                                                break:
                                                    false,
                                            },
                                        ],
                                },
                            points:
                                {
                                    create:
                                        [
                                            {
                                                highlightedText:
                                                    "A loose deadline, ",
                                                text:
                                                    "having the freedom to experiment with different approaches. And no strict deadline meant I could take my time to make a reliable web mail.",
                                                icon:
                                                    "/icons/yellow-clock.svg"
                                            },
                                            {
                                                highlightedText:
                                                    "Balancing development speed ",
                                                text:
                                                    "with thorough testing to maintain high security standards.",
                                                icon:
                                                    "/icons/yellow-key.svg"
                                            },
                                            {
                                                highlightedText:
                                                    "User feedback was crucial, ",
                                                text:
                                                    "guiding iterative improvements throughout the project.",
                                                icon:
                                                    "/icons/yellow-neutral-emoji.svg"
                                            },
                                            {
                                                highlightedText:
                                                    "Maintaining focus on core functionalities ",
                                                text:
                                                    "while developing additional features was essential.",
                                                icon:
                                                    "/icons/yellow-html-css.svg"
                                            }
                                        ]
                                },
                            images: {
                                create: {
                                    caption: 'Mail App Problem Image',
                                    alt: 'Overview of Mail App Problem Context',
                                    src: '/images/mail-app/problem.png',
                                    type: 'IMAGE'
                                }
                            }
                        }
                    },
                    updateFlow: {
                        create: {
                            heading: 'The backbone of the project.',
                            information: {
                                create: [
                                    {
                                        subHeading: "Starting with User Needs.",
                                        description: {
                                            create: [
                                                {
                                                    text: 'Conducted surveys to understand user expectations for an email client, focusing on features like security and ease of use.',
                                                    highlight: false,
                                                    break: false
                                                },
                                                {text: '(see Figure 1.0).', highlight: true, break: false}
                                            ]
                                        },
                                        image: {
                                            create: {
                                                caption: 'User Needs Survey Results',
                                                alt: 'Survey results for Mail App features.',
                                                src: '/images/mail-app/survey.png',
                                                type: 'IMAGE',
                                                number: '1.0'
                                            }
                                        }
                                    },
                                    {
                                        subHeading: "Iterative Development Process.",
                                        description: {
                                            create: [
                                                {
                                                    text: 'Adopted an agile development methodology, allowing for rapid iterations based on user feedback and testing results.',
                                                    highlight: false,
                                                    break: false
                                                },
                                                {text: '(see Figure 1.1).', highlight: true, break: false}
                                            ]
                                        },
                                        image: {
                                            create: {
                                                caption: 'Agile Development Process Overview',
                                                alt: 'Overview of agile development process for Mail App.',
                                                src: '/images/mail-app/agile.png',
                                                type: 'IMAGE',
                                                number: '1.1'
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    layoutPatterns: {
                        create: {
                            heading: 'Responsive Design Principles Applied.',
                            information: {
                                create: [
                                    {
                                        subHeading: 'Ensuring Accessibility Across Devices.',
                                        description: {
                                            create: [
                                                {
                                                    text: 'Utilized responsive design techniques to ensure optimal usability on both desktop and mobile devices.',
                                                    highlight: false,
                                                    break: false
                                                },
                                                {text: '(see Figure 2.0)', highlight: true, break: false},
                                                {
                                                    text: ', which significantly improved user engagement.',
                                                    highlight: false,
                                                    break: true
                                                }
                                            ]
                                        },
                                        image: {
                                            create: {
                                                caption: 'Responsive Design Layouts',
                                                alt: 'Examples of responsive layouts used in Mail App.',
                                                src: '/images/mail-app/responsive.png',
                                                type: 'IMAGE',
                                                number: '2.0'
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    interactions: {
                        create: {
                            heading: 'Enhancing User Interactions.',
                            information: {
                                create: [
                                    {
                                        subHeading: 'Intuitive Navigation Features.',
                                        description: {
                                            create: [
                                                {
                                                    text: 'Implemented features such as drag-and-drop for organizing emails and customizable shortcuts for enhanced usability.',
                                                    highlight: false,
                                                    break: true
                                                },
                                                {text: '(see Figure 3.0)', highlight: true, break: false}
                                            ]
                                        },
                                        image: {
                                            create: {
                                                caption: 'User Interaction Features Overview',
                                                alt: 'Overview of interaction features in Mail App.',
                                                src: '/images/mail-app-interactions.png',
                                                type: 'IMAGE',
                                                number: '3.0'
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    visualDesign: {
                        create: {
                            heading: 'A Clean Visual Aesthetic.',
                            information: {
                                create: [
                                    {
                                        subHeading: 'Modern UI Elements Combined with Functionality.',
                                        description: {
                                            create: [
                                                {
                                                    text: 'Designed with a focus on simplicity and clarity, ensuring that users can navigate easily without distractions.',
                                                    break: true,
                                                    highlight: false
                                                },
                                                {text: '(see Figure 4.0)', break: true, highlight: true},
                                                {
                                                    text: ', showcasing the balance between aesthetics and functionality.',
                                                    break: false,
                                                    highlight: false
                                                }
                                            ]
                                        },
                                        image: {
                                            create: {
                                                caption: 'Visual Design Elements in Mail App',
                                                alt: 'Visual design elements used in Mail App UI.',
                                                src: '/images/mail-app/visual-design.png',
                                                type: 'IMAGE',
                                                number: '4.0'
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    finalDesign: {
                        create: {
                            heading: 'Delivering an Effortless User Experience.',
                            information: {
                                create: [
                                    {
                                        subHeading: 'Streamlined Workflow from Start to Finish.',
                                        description: {
                                            create: [
                                                {
                                                    text: 'The final design allows users to manage their emails efficiently with minimal clicks required to perform common tasks (see Figure 5.0). ',
                                                    break: true,
                                                    highlight: false
                                                }
                                            ]
                                        },
                                        image: {
                                            create: {
                                                caption: 'Final Design Overview',
                                                alt: 'Final design layout of Mail App.',
                                                src: '/images/mail-app/final-design.png',
                                                type: 'LOOPVIDEO',
                                                number: '5.0'
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    retrospective: {
                        create: {
                            heading: 'Reflecting on Key Learnings.',
                            information: {
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
                                                    heading: 'Balancing Security with Usability',
                                                    description: "Learned how to implement robust security measures without compromising user experience."
                                                },
                                                {
                                                    icon: '/icons/green-thumbs-up.svg',
                                                    heading: "Iterative Development",
                                                    description: "Adopted agile methodologies that allowed continuous improvement based on feedback."
                                                },
                                                {
                                                    icon: '/icons/green-thumbs-up.svg',
                                                    heading: "User-Centric Design",
                                                    description: "Focused on creating an intuitive interface based on user needs."
                                                },
                                                {
                                                    icon: '/icons/green-thumbs-up.svg',
                                                    heading: "Performance Optimization",
                                                    description: "Gained insights into optimizing web applications for speed."
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
    });

    console.log('Seeding completed successfully');
    console.log("Created project:", project.id);

}

    main()
        .catch((e) => {
            console.error(e);
            process.exit(1);
        })
        .finally(async () => {
            await prisma.$disconnect();
        });
