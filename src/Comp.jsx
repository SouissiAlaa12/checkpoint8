import React from 'react' ; 
import './button.css'; 
import Pic1 from "./pic1.jpg";
import Pic2 from "./pic2.jpg";
import Pic3 from "./pic3.jpg";
class Comp extends React.Component{

    state = {
        photo:{Pic1},
        name:"Sarra" ,
        desc:"qfqjfdùpkgmosdjgpohjopzjùgporjyusjgdmksjgomsdkglmdsgjpozegjojgdlmsgksdlgksdmlgjsdmklgjskgjsdmgùjsdmgùjsodjùlmgksdjglmdsjglsmdgjùgjsdmg"
    }

    render(){
        return(
            <div>
            <div>

               <button onClick={()=>{this.setState({name:"Sarra",photo:Pic1,desc:"qfqjfdùpkgmosdjgpohjopzjùgporjyusjgdmksjgomsdkglmdsgjpozegjojgdlmsgksdlgksdmlgjsdmklgjskgjsdmgùjsdmgùjsodjùlmgksdjglmdsjglsmdgjùgjsdmg"})}}>Sarra</button>
                
           <button onClick={()=>{this.setState({name:"Daniel",photo:Pic2,desc:"qfjqmofjdqoùgjezpgjmodgjsùdgjksdmlgjsdlmkgjvsdlkgjdsklgjsdkglsjdmgsdjgmlsdjgmldg"})}
                }>Daniel</button> 
                    
               <button onClick={()=>{this.setState({name:"Halord",photo:Pic3,desc:"qsfksfjdpfjsdpfosdjkfmsdkmsdfkmslfsirgjrutqlfkmlsdkgl*fskgmlfdkgmldffqdf"})}}>Halord</button>
             </div>
            <div>
            <img src={this.state.photo} alt="pic1"></img>
             <h1>{this.state.name}</h1>  
             <p>{this.state.desc}</p>

           
       </div> 
       </div>
       )
       
        }

}

export default Comp ; 
