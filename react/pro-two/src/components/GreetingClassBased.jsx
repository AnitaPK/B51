import React from "react";



class GreetingClassBased extends React.Component{

    render(){
        console.log(this.props)

        const name = this.props.studName

        return <h1>HELLO {name}</h1>
    }


}

export default GreetingClassBased