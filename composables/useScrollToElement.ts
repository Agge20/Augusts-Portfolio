/**
 * Scrolls smoothly to the HTML element with the specified id.
 * If the element does not exist, the function does nothing.
 *
 * @param id - The id of the HTML element to scroll to.
 */
export const useScrollToElement = (id: string): void => {
    const element: HTMLElement | null = document.querySelector(`#${id}`);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};