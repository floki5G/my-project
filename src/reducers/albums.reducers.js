

const initialState = {
    albums: [],
    loading: false,
    error: null
}

export const albumsreducers = (state = initialState, action) => {

    switch (action.type) {
        case "ALBUM_SUCCESS":
            state = {
                albums: action.payload,
                loading: true,

            }
            break;
        case "ALBUM_FAILURE":
            state = {
                loading: true,
                error: action.payload.error,
            }
            break;


    }
    return state
}