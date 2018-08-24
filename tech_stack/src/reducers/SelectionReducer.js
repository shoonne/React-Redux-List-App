export default (state = null, action) => { // Pass the inital state and the action
   // console.log(action);  Logs the action after a press.

   switch (action.type) {
       case 'select_library':
       return action.payload // Library id

       default:
       return state; // Return the last state.
   }


    return null; // Initial state that the reducer return. 
};