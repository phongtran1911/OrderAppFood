import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Collection from './collection';
import Category from './category';
class Home extends Component{
    render(){
        return(
           <ScrollView style={{ backgroundColor: '#DBDBD8', flex: 1 }}>              
               <Category />
               <Collection />
           </ScrollView> 
        );
    }
}
export default Home;