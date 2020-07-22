import React from 'react';
import {Route,Redirect,withRouter} from 'react-router-dom';
import pageurl from '../url/pageurl';

const renderPage = (Component,props) =>{
    return <Route render = {() => <Component {...props} />}/>
}

// const reDirect=(props,page)=> {
//     return <Redirect to={
//         {
//             pathname: page,
//             state: {
//                 from: props.location
//             }
//         }
//     }/> 
// }

const ProtectedRoute = ({component: Component,history,...rest}) => {


    return(
    
        <Route {...rest} render={       
            (props) => {
                return renderPage(Component,props);                    
            }
        } />
    
    )
}

export default withRouter(ProtectedRoute);