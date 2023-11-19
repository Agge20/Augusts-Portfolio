import { defineStore } from "pinia";

/* Types */
import type { Skill } from "~/types/interfaces/Skill";

export const useMainStore = defineStore("mainStore", {
    state: () => {
        // Define what color theme should be used
        const theme = ref<"dark" | "light">("light");
        // Holds all the skills from the skills content directory
        const skills = ref<Skill[]>([]);
        // Controls if the mobile navigation menu is open or not
        const openNavbarMobile = ref<boolean>(false);

        return {
            theme,
            skills,
            openNavbarMobile,
        };
    },
    actions: {
        checkUserThemePreference() {
            // Check if the user has a theme preference
            const themePreference = localStorage.getItem("themePreference");

            // If the user has a theme preference, use that
            if (themePreference === "light") {
                this.theme = "light";
            } else if (themePreference === "dark") {
                this.theme = "dark";
            } else {
                this.theme = "light";
            }
        },
        // Toggle the theme between light and dark
        toggleTheme() {
            if (this.theme === "light") {
                this.theme = "dark";
            } else {
                this.theme = "light";
            }

            // Store the user preference in local storage
            localStorage.setItem("themePreference", this.theme);
        },
    },
});
