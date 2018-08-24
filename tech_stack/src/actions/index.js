// Action Creator = A Javascript function that returns a object
// It has a type and a payload with the data to manage

export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId,
        

    };
};