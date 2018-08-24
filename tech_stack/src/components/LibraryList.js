import React, { Component } from 'react';
import { FlatList }         from 'react-native';
import { connect }          from 'react-redux';
import ListItem             from './ListItem';

// Purpose of this file is render to list of libraries to the user
class LibraryList extends Component {
    renderItem(library){
        return <ListItem library={library} /> 
        // ListItem is a costum component
    }
    
    render() {
        console.log(this.props.libraries);
        return(
            <FlatList
            data={this.props.libraries} //List of items to render on screen
            renderItem={this.renderItem}//Function to render out each item
            keyExtractor={(library) => library.id} // Return a unique key for every item
            />
        );
    }
}



const mapStateToProps = state => {
    //This object will show up as props to LibraryList
    return { libraries : state.libraries};

};

// mapStateToProps takes our global state object 
// and provide them as props to <LibraryList />

export default connect(mapStateToProps)(LibraryList); 

// connect() function gives us acces to the state
// connect() gets called and then another function 
// is called with LibraryList


