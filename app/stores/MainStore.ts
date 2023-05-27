import { defineStore } from "pinia";

// Import the state type of the store
import { MainStoreState } from "@/types/MainStoreState";

export const useMainStore = defineStore("mainStore", {
    state: (): MainStoreState => {
        return {
            // for initially empty lists
            theme: "light",
        };
    },
    actions: {
        checkUserThemePreference() {
            // Check if user preference is stored in local storage
            const preference = localStorage.getItem("themePreference");

            if (preference === "light" || preference === "dark") {
                // User preference is stored, update the state
                this.theme = preference;
            } else {
                // User preference is not stored, check if it is set in the operating system
                const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

                if (mediaQuery.matches) {
                    // Dark mode is preferred in the operating system
                    this.theme = "dark";
                } else {
                    // Light mode is preferred in the operating system
                    this.theme = "light";
                }
            }
        },
    },
});
