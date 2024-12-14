export enum HighlightType {
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    LOOPVIDEO = 'VIDEO LOOP',
    INTERACTIVE = 'INTERACTIVE',
}

type HighlightImages = {
    id: string;
    src: string;
    alt: string;
    caption: string;
    type: string;
    number?: string;
    interactiveAlt?: string;
    interactiveText?: string;
    interactiveSrc?: string;
};

export default HighlightImages;