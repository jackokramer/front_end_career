import React from 'react'


const Container = (props) => {
    return (
        <div className="container">
            {this.props.children}          
        </div>
    )
} /*fucntional components 
1) if its a simple jsx markup no need for a class based component
2) to access props need to decalre it in the variables parameter (props)
 */
export default Container