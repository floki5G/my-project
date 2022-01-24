import axiosInstance from "../api"

export const _album = () => {

    return async (dispatch) => {
        const res =await axiosInstance.get("/albums")

        if (res.status === 200) {


            dispatch({
                type: "ALBUM_SUCCESS",
                payload: res.data
                


            })
        }
        else {
    
            dispatch({
                type: "ALBUM_FAILURE",
                payload: {
                     error: "album failedd" 
                }
            })
        }
    }
}


export const _photos = () => {

    return async (dispatch) => {
        const res =await axiosInstance.get("/photos")

        if (res.status === 200) {

            dispatch({
                type: "PHOTOS_SUCCESS",
                payload: res.data
            })
        }
        else {
    
            dispatch({
                type: "PHOTOS_FAILURE",
                payload: {
                    payload: { error: "PHOTOS failed" }
                }
            })
        }
    }
}