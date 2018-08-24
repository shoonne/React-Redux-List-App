import React        from 'react';
import { View }     from 'react-native';
import { Provider } from 'react-redux';
import {createStore} from 'redux';    // Redux store containing state
import reducers     from './reducers' // Access to the reducers
import { Header }   from './components/common';
import LibraryList  from './components/LibraryList';


const App = () => {
    return(
        <Provider store={createStore(reducers)}> 
         <View style= {styles.view}>
           <Header headerText="Tech Stack"/>
           <LibraryList />
         </View>
        </Provider>
    );
};

const styles = {
    view: {
        flex: 1 // Fills upp as much as possible
    }
}



export default App;