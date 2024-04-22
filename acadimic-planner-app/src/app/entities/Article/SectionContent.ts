import { ContentItem } from "./ContentItem";

// COMPOSITE
export class SectionContent extends ContentItem {

    title: string;
    text: string;
    // composant
    content: ContentItem[];

}
