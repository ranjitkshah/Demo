// import axios from 'axios'; 
  
import React,{Component} from 'react'; 
  
class submitAssignment extends Component { 
   
    state = { 
  
      // Initially, no file is selected 
      selectedFile: null
    }; 
     
    // On file select (from the pop up) 
    onFileChange = event => { 
     
      // Update the state 
      this.setState({ selectedFile: event.target.files[0] }); 
     
    }; 
     
    // On file upload (click the upload button) 
    onFileUpload = () => { 
      if(this.state.selectedFile){
     alert('assignment uploaded!');
      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      // formData.append( 
      //   "myFile", 
      //   this.state.selectedFile, 
      //   this.state.selectedFile.name 
      // ); 
      // Request made to the backend api 
      // Send formData object 
      // axios.post("api/uploadfile", formData); 
      }else{
        alert("you have not choosen a file yet")
      }
    }; 
     
    // File content to be displayed after 
    // file upload is complete 
    fileData = () => { 
     
      if (this.state.selectedFile) { 
          
        return ( 
          <div> 
            <h2>File Details:</h2> 
            <p>File Name: {this.state.selectedFile.name}</p> 
            <p>File Type: {this.state.selectedFile.type}</p> 
            <p> 
              Last Modified:{" "} 
              {this.state.selectedFile.lastModifiedDate.toDateString()} 
            </p> 
          </div> 
        ); 
      } else { 
        return ( 
          <div> 
            <br /> 
            <h4>Choose a file before Pressing the Upload button!!</h4> 
          </div> 
        ); 
      } 
    }; 
     
    render() { 
     
      return ( 
        <div style={{display: "flex", justifyContent: "center", alignItems:"center", flexDirection:"column", marginTop: "60px"}}> 
            <h1> 
              File Upload using React! 
            </h1> 
            <div> 
                <input type="file" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
            </div> 
          {this.fileData()} 
        </div> 
      ); 
    } 
  } 

  export default submitAssignment