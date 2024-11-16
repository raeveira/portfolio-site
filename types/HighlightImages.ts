export enum HighlightType {
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    LOOPVIDEO = 'VIDEO LOOP',
    INTERACTIVE = 'INTERACTIVE',
}

type HighlightImages = {
    src: string;
    interactiveSrc?: string;
    alt: string;
    interactiveAlt?: string;
    caption: string;
    type: HighlightType;
    number?: string;
}

export default HighlightImages;