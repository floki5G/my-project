

const initialState = {
    photos:[],
    loading: false,
    error: null
}
export const photosreducers = (state = initialState, action) => {

    switch (action.type) {
        case "PHOTOS_SUCCESS": 
            state = {
                photos:  action.payload,
                loading: true,
 
            }
            break;
            case "PHOTOS_FAILURE": 
            state = {
                loading:true,
                error:action.payload.error,
            }
            break;


        
    }
    return state
}