// Define allowed values for the navigation links
export enum NavigationText {
    AboutMe = "About Me",
    Interests = "Interests",
    Skills = "Skills",
    Portfolio = "Portfolio",
    Contact = "Contact",
}

export interface NavigationLink {
    text: NavigationText;
    scrollToId: string;
}

// Create tuple type for the navigation links
export type NavigationLinks = [NavigationLink, NavigationLink, NavigationLink, NavigationLink, NavigationLink];
