export enum HighlightType {
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    LOOPVIDEO = 'VIDEO LOOP',
}

type HighlightImages = {
    src: string;
    alt: string;
    caption: string;
    type: HighlightType;
}

export default HighlightImages;