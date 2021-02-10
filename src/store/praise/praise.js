export const praiseMod = {
    state: {
        praise: 3000
    },
    mutations: {
        changePraise(state, num = 1) {
            state.praise += num;
        }
    },
    actions: {},
}