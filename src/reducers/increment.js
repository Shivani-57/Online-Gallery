// reducers/increment.js
const initialState = {
    images: [], // Your existing images array
};


const changeCount = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            const { imageId } = action.payload;
            return {
                ...state,
                images: state.images.map((image) =>
                    image._id == imageId ? { ...image, count: image.count + 1 } : image
                ),
            };
        default:
            return state;
    }
};

