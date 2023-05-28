import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
    state: () => {
        // Define what color theme should be used
        const theme = ref<"dark" | "light">("light");

        return {
            theme,
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
