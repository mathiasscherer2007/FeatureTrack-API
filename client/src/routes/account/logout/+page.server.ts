import type { Actions } from "./$types";

export const actions: Actions = {
    logout: ({ cookies }) => {
        console.log(cookies.get('userid'));
    }
};