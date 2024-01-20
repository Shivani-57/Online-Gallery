// actions/index.js
export const incCount = (imageId) => {
    return {
        type: "INCREMENT",
        payload: (imageId)
    };
};
