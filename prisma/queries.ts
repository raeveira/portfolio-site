'use server'
import { PrismaClient } from '@prisma/client';
import {ExtendedProject as Project} from "@/types/ProjectType";

const prisma = new PrismaClient();

export const fetchDataById = async ({ id }: { id: string }): Promise<Project | null> => {
    return prisma.project.findUnique({
        where: { id },
        include: {
            SidebarItems: true,
            Content: {
                include: {
                    overview: true,
                    highlightReel: {
                        include: {
                            moneyshots: true,
                        }
                    },
                    context: {
                        include: {
                            description: true,
                            images: true,
                        }
                    },
                    problem: {
                        include: {
                            description: true,
                            solutionDescription: true,
                            points: true,
                            images: true,
                        }
                    },
                    updateFlow: {
                        include: {
                            information: {
                                include: {
                                    description: true,
                                    image: true,
                                    cards: true,
                                    points: true,
                                    additionalPoints: true,
                                    additionalPoints1: true,
                                    additionalPoints2: true,
                                    discovery: true,
                                }
                            },
                        }
                    },
                    layoutPatterns: {
                        include: {
                            information: {
                                include: {
                                    description: true,
                                    image: true,
                                    cards: true,
                                    points: true,
                                    additionalPoints: true,
                                    additionalPoints1: true,
                                    additionalPoints2: true,
                                    discovery: true,
                                }
                            },
                        }
                    },
                    interactions: {
                        include: {
                            information: {
                                include: {
                                    description: true,
                                    image: true,
                                    cards: true,
                                    points: true,
                                    additionalPoints: true,
                                    additionalPoints1: true,
                                    additionalPoints2: true,
                                    discovery: true,
                                }
                            },
                        }
                    },
                    visualDesign: {
                        include: {
                            information: {
                                include: {
                                    description: true,
                                    image: true,
                                    cards: true,
                                    points: true,
                                    additionalPoints: true,
                                    additionalPoints1: true,
                                    additionalPoints2: true,
                                    discovery: true,
                                }
                            },
                        }
                    },
                    finalDesign: {
                        include: {
                            information: {
                                include: {
                                    description: true,
                                    image: true,
                                    cards: true,
                                    points: true,
                                    additionalPoints: true,
                                    additionalPoints1: true,
                                    additionalPoints2: true,
                                    discovery: true,
                                }
                            },
                        }
                    },
                    retrospective: {
                        include: {
                            information: {
                                include: {
                                    description: true,
                                    image: true,
                                    cards: true,
                                    points: true,
                                    additionalPoints: true,
                                    additionalPoints1: true,
                                    additionalPoints2: true,
                                    discovery: true,
                                }
                            },
                        }
                    },
                }
            }
        }
    });
};

export const fetchAllDataIds = async (): Promise<Project[]> => {
    return prisma.project.findMany({
        include: {
            SidebarItems: true,
            Content: {
                include: {
                    overview: true,
                    highlightReel: {
                        include: {
                            moneyshots: true,
                        }
                    },
                    context: {
                        include: {
                            description: true,
                            images: true,
                        }
                    },
                    problem: {
                        include: {
                            description: true,
                            solutionDescription: true,
                            points: true,
                            images: true,
                        }
                    },
                    updateFlow: {
                        include: {
                            information: {
                                include: {
                                    description: true,
                                    image: true,
                                    cards: true,
                                    points: true,
                                    additionalPoints: true,
                                    additionalPoints1: true,
                                    additionalPoints2: true,
                                    discovery: true,
                                }
                            },
                        }
                    },
                    layoutPatterns: {
                        include: {
                            information: {
                                include: {
                                    description: true,
                                    image: true,
                                    cards: true,
                                    points: true,
                                    additionalPoints: true,
                                    additionalPoints1: true,
                                    additionalPoints2: true,
                                    discovery: true,
                                }
                            },
                        }
                    },
                    interactions: {
                        include: {
                            information: {
                                include: {
                                    description: true,
                                    image: true,
                                    cards: true,
                                    points: true,
                                    additionalPoints: true,
                                    additionalPoints1: true,
                                    additionalPoints2: true,
                                    discovery: true,
                                }
                            },
                        }
                    },
                    visualDesign: {
                        include: {
                            information: {
                                include: {
                                    description: true,
                                    image: true,
                                    cards: true,
                                    points: true,
                                    additionalPoints: true,
                                    additionalPoints1: true,
                                    additionalPoints2: true,
                                    discovery: true,
                                }
                            },
                        }
                    },
                    finalDesign: {
                        include: {
                            information: {
                                include: {
                                    description: true,
                                    image: true,
                                    cards: true,
                                    points: true,
                                    additionalPoints: true,
                                    additionalPoints1: true,
                                    additionalPoints2: true,
                                    discovery: true,
                                }
                            },
                        }
                    },
                    retrospective: {
                        include: {
                            information: {
                                include: {
                                    description: true,
                                    image: true,
                                    cards: true,
                                    points: true,
                                    additionalPoints: true,
                                    additionalPoints1: true,
                                    additionalPoints2: true,
                                    discovery: true,
                                }
                            },
                        }
                    },
                }
            }
        }
    })
};