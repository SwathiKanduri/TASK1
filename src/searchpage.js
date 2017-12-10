import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import RaisedButton from 'material-ui/RaisedButton';
// import RefreshIndicator from 'material-ui/RefreshIndicator';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import SearchBar from 'material-ui-search-bar';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {GridList, GridTile} from 'material-ui/GridList';


const avatarstyle={ color:'blue', backgroundColor:'indigo', size:30};
const paperstyle={height: 900,
    width: 300,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',};

    const gridstyles = {
      fordiv: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      forgridList1: {
        width: 300,
        height: 2000,
        overflowY: 'auto',
        boxSizing: 'border-box',
        display: 'inline-block',
      },
      forgridList2: {
        width: 650,
        height: 2000,
        overflowY: 'auto',
        boxSizing: 'border-box',
        display: 'inline-block',
      },
    };



   {/*  homepage:function(e){
      window.location="/";
    }   */}

const MySearchComponent = () => (

    <div> {/* whole, first total div is this  */}


        <div  style={{textAlign: 'left',height: 30, padding: 20,}}>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <div syle={{float:'left'}}>  
  <FlatButton label="Home" style={{ 'vertical-Align':"middle"}}  
      icon={<FontIcon className="material-icons" > home </FontIcon >}/ > 
      <FlatButton label="Notifications" style={{ 'vertical-Align':"middle"}} 
      icon={<FontIcon className="material-icons" > notifications </FontIcon >} />
       <FlatButton label="Messages" style={{verticalAlign:"middle"}} // secondary={true}
      icon={<FontIcon className="material-icons" >messages </FontIcon >} / >
          
        
    <div style={{float:'right', top:0, bottom: 100,}} >
    <ul style={{listStyle:'none',verticalAlign:'top'}}>
    <li style={{display:'inline-block'}}>   &nbsp; &nbsp; &nbsp;
    <input type="text" placeholder=" aadhar " />  </li>
    <li style={{display:'inline-block'}}>
    <Avatar icon={<FontIcon className="material-icons">account_box</FontIcon >} style={avatarstyle} />  </li>
    <li style={{display:'inline-block'}}>
    <FlatButton label="tweet" style={{'vertical-Align':"middle"}} /> </li>
      {/*   */}  
  </ul>
  </div>
  </div>
  </div>

  <div className="twitheader"> 
<p style={{color:'white',paddingLeft:55}}> <h2>  aadhar </h2> </p>
  </div>

  <div style={{float:'left',height:30,padding:10,display:'block',backgroundColor:'white' }}> 
<ul style={{listStyle:'none',float:'left'}}> 
<li style={{display:'inline-block',paddingLeft:20}}>
<a href="/" style={{fontFamily:'verdana', textDecoration:'none' ,verticalAlign:'middle'}}><b> Top </b> </a>
 </li>
 <li style={{display:'inline-block',paddingLeft:20}}>
 <a href="/" style={{fontFamily:'verdana', textDecoration:'none' ,verticalAlign:'middle'}}><b> Latest </b> </a>
  </li>
  <li style={{display:'inline-block',paddingLeft:20}}>
  <a href="/" style={{fontFamily:'verdana', textDecoration:'none' ,verticalAlign:'middle'}}><b> People </b> </a>
   </li>
 <li style={{display:'inline-block',paddingLeft:20}}>
<a href="/" style={{fontFamily:'verdana', textDecoration:'none' ,verticalAlign:'middle'}}><b> Photos </b> </a>
 </li>
 <li style={{display:'inline-block',paddingLeft:20}}>
 <a href="/" style={{fontFamily:'verdana', textDecoration:'none' ,verticalAlign:'middle'}}><b> Videos </b> </a>
  </li>
  <li style={{display:'inline-block',paddingLeft:20}}>
  <a href="/" style={{fontFamily:'verdana', textDecoration:'none' ,verticalAlign:'middle'}}><b> News </b> </a>
   </li>
   <li style={{display:'inline-block',paddingLeft:20}}>
   <a href="/" style={{fontFamily:'verdana', textDecoration:'none' ,verticalAlign:'middle'}}><b> Broascast </b> </a>
    </li>
</ul> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
<IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}} >
      <MenuItem primaryText="Embed this search" />
    </IconMenu>  
  </div>
  <span> <br /><br /></span>
    {/*   taking two grids as part of <li> side by side in <ul>, each with singe column and required no.of rows  */}

    < div style={{backgroundColor:'#e6ecf0'}} >
<ul style={{listStyle:'none',padding:10}}> <li style={{display:'inline-block',paddingLeft:20 }} >

<div style= {{float:'left',display:'block'}}> 
<div> 

{/*   code for left side pane as a single grid with single column and using padding, tile height etc  */}


<div style={gridstyles.fordiv}>
    <GridList cols={1} cellHeight='auto' padding={0} style={gridstyles.forgridList1} >
        <GridTile
          cols={ 1}
          rows={ 1} >
          <div className="griddiv"> 
            <div style= {{float:'left'}}> 
              <h3> Search filters </h3>
              <button style={{padding: 0, backgroundColor: 'transparent',backgroundImage: 'none',
                             border:0, color: '#1c94e0',cursor: 'pointer', }}> Show </button>

            </div>
          </div>
        </GridTile>
        <GridTile
          cols={ 1}
          rows={ 1} >
          <div className="griddiv">  
            <div > 
              <h3> Related Searches</h3>
             <ul style={{listStyle:'none',padding:'0 15px 15px',float:'left'}}>
             <li style={{marginBottom:6,textAlign:'inherit',display: 'list-item',}} > 
            <a  href="/" style={{fontFamily:'verdana', textDecoration:'none' ,verticalAlign:'middle',
          wordWrap: 'break-word',
          color: '#1c94e0',
              textDecoration:'none',
              background: 'transparent',
          }}>
            Bombay high court
             </a>
             </li>
             <li style={{marginBottom:6,textAlign:'inherit',display: 'list-item',}}  > 
            <a  href="/" style={{fontFamily:'verdana', textDecoration:'none' ,verticalAlign:'middle',
          wordWrap: 'break-word',
          color: '#1c94e0',
              textDecoration:'none',
              background: 'transparent',
          }}>
            #aadhar
             </a>
             </li>
             <li style={{marginBottom:6,textAlign:'inherit',display: 'list-item',}}> 
            <a  href="/" style={{fontFamily:'verdana', textDecoration:'none' ,verticalAlign:'middle',
          wordWrap: 'break-word',
          color: '#1c94e0',
              textDecoration:'none',
              background: 'transparent',
          }}>
            republic day
             </a>
             </li>
             <li style={{marginBottom:6,textAlign:'inherit',display: 'list-item',}}> 
            <a  href="/" style={{fontFamily:'verdana', textDecoration:'none' ,verticalAlign:'middle',
          wordWrap: 'break-word',
          color: '#1c94e0',
              textDecoration:'none',
              background: 'transparent',
          }}>
            #gujaratjhaaduyatra
             </a>
             </li>

               </ul>
            </div>
          </div>
        </GridTile>
        <GridTile
          cols={ 1}
          rows={ 1} >
          <div className="griddiv"> 
            <div style= {{float:'left'}}> 
              <h3> World Wide Trends</h3>
              <ul style={{listStyle:'none',padding:'0 15px 15px',float:'left'}}>
             <li style={{marginBottom:6,textAlign:'inherit',display: 'list-item',}} > 
            <a  href="/" style={{fontFamily:'verdana', textDecoration:'none' ,verticalAlign:'middle',
          wordWrap: 'break-word',
          color: '#1c94e0',
              textDecoration:'none',
              background: 'transparent',
          }}>
            #Sydney Derby   </a>
            <span> <br /> </span>
            3120 Tweets
             </li> <span> <br /> </span>

             <li style={{marginBottom:6,textAlign:'inherit',display: 'list-item',}} > 
            <a  href="/" style={{fontFamily:'verdana', textDecoration:'none' ,verticalAlign:'middle',
          wordWrap: 'break-word',
          color: '#1c94e0',
              textDecoration:'none',
              background: 'transparent',
          }}>
            Madeleine </a>
            <span> <br /> </span>
            3120 Tweets
             </li> <span> <br /> </span>

             <li style={{marginBottom:6,textAlign:'inherit',display: 'list-item',}} > 
            <a  href="/" style={{fontFamily:'verdana', textDecoration:'none' ,verticalAlign:'middle',
          wordWrap: 'break-word',
          color: '#1c94e0',
              textDecoration:'none',
              background: 'transparent',
          }}>
            #2018PredictionsIn5Words  </a>
            <span> <br /> </span>
             </li> <span> <br /> </span>
             
             <li style={{marginBottom:6,textAlign:'inherit',display: 'list-item',}} > 
            <a  href="/" style={{fontFamily:'verdana', textDecoration:'none' ,verticalAlign:'middle',
          wordWrap: 'break-word',
          color: '#1c94e0',
              textDecoration:'none',
              background: 'transparent',
          }}>
             #OTDirecto9D </a>
            <span> <br /> </span>
            47.8K Tweets
             </li>
             </ul>
            </div>
          </div>
        </GridTile>
    </GridList>
  </div>

</div>
</div>
</li>

{/*   second grid beside the first one for middle part that contains results for #aadhar search  */}
<li style={{display:'inline-block',paddingLeft:20}} >
<div style={{float:'left'}} > 

<div style={gridstyles.fordiv}>
    <GridList cols={2} cellHeight='auto' padding={0} style={gridstyles.forgridList2} >
        <GridTile
          cols={ 2}
          rows={ 2} >
          <div > 
            <div style= {{float:'left'}}> 
              <h3>  People  </h3></div>
              <div style= {{float:'right'}} > <span> <br /> </span>
              <button style={{padding: 0, backgroundColor: 'transparent',backgroundImage: 'none',
                             border:0, color: '#1c94e0',cursor: 'pointer', }}>  View </button>

            </div>
          </div>
        </GridTile>
        <GridTile
          cols={ 1}
          rows={ 1} >
          <div className="griddiv"> 
            <div style= {{float:'left'}}> 

                    {/*  add a paper within the gridtile to mock people result for aadhar search */}

<Paper style={{height:'auto',
    width:'auto' ,
   
    float:'center',
    textAlign: 'left',
    display: 'inline-block',}} zDepth={0} > 
                   {/* <div  className="twitheader" > </div> */}
                   
       <div style={{float:'left', backgroundColor: 'rgb(184, 201, 219)',backgroundClip:'padding-box', textAlign:'left',
                     width:300,height:'auto', }}> 
                   
                   <span>  <br/><br/> <br/> </span>
                   
       <Avatar size={60} src='https://pbs.twimg.com/profile_images/877766037051068418/Q_WeALeS_bigger.jpg' />  </div>
                   
       <span> <br/> <br/> <br/> <br/> <br/><br/><br/> <br/><br/> </span>      
        <div style={{float:'center',}}>      
                <a style={{textDecoration:'none',color:'black',fontFamily:'verdana',size:20}} href="/"><b> Aadhar </b> </a>   
                <span> <br/> </span> 
                <a style={{textDecoration:'none',color:'black',fontFamily:'verdana',}} href="/"> @UIDAI </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{borderRadius:25,backgroundColor:'transparent',boxShadow:'none',
                borderColor:'#1c94e0',cursor:'pointer',color:'#1c94e0',}}> Follow </button>
                <span > <br /> <br/>  </span> 
                <div style={{float:'center',textAlign:'left'}}>
                Official Twitter account of the Unique Identification Authority of India. RTs are not endorsements.
                 </div>
                
                    </div>
                    
                    </Paper>


            </div>
          </div>
          </GridTile>
        <GridTile
          cols={ 2}
          rows={ 1} >
          <div className="griddiv"> 
            <div style= {{float:'left'}}> 
             
             {/* add the main page news feed here */}

             <Paper style={{height: 350,
                       width: 580,
                       margin: 5,
                       // float:'left',
                       align:'center',
                       textAlign: 'center',
                       display: 'inline-block',}} zDepth={0}> 
                   
                       <div>
                   
                    <Avatar style={{float:'left'}} src="https://pbs.twimg.com/profile_images/877766037051068418/Q_WeALeS_400x400.jpg" />
                   
                    <div style={{float:'left'}} ><a href="/" style={{textDecoration:'none'}}> Aadhar </a>&nbsp; &nbsp; &nbsp;
                      @UIDAI  &nbsp; &nbsp; 
                      <a href="/" style={{textDecoration:'none'}}>  24m </a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                      &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      <IconMenu
                         iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                         anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                         targetOrigin={{horizontal: 'left', vertical: 'top'}} >
                         <MenuItem primaryText="Copy link to tweet" />
                         <MenuItem primaryText="Embed tweet" />
                       </IconMenu>
                     </div>
                   
                     <span> <br /> <br/> </span>
                   
                     <div id="someDiv" style={{float:'left',textAlign:'left'}} >
                     Press Release: UIDAI clarifies position of Aadhaar Act vis-a-vis linking of various services </div>
                   
                   <div>
                     <img src="https://pbs.twimg.com/media/DQcVYsmUIAANRHu.jpg"
                     height=" 200" width="450" />
                   </div> 
                   
                   
                   
                   <div>
                   <ul style={{listStyle:'none',float:'left'}}>
                   <li style={{display:'inline-block'}}>
                   <FlatButton style={{ 'vertical-Align':"middle"}}  
                         icon={<FontIcon className="material-icons" > comment </FontIcon >} / >
                   
                   </li> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                   <li style={{display:'inline-block'}}>
                   <FlatButton style={{ 'vertical-Align':"middle"}}  
                         icon={<FontIcon className="material-icons" > favorite </FontIcon >} / >
                   </li> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                   <li style={{display:'inline-block'}}>
                   <FlatButton style={{ 'vertical-Align':"middle"}}  
                         icon={<FontIcon className="material-icons" > transform </FontIcon >} / >
                   </li>
                   </ul>
                   </div>  
                   </div>

                   <span> <br/> <br/> <br/> <br/>  </span>
                   
                   
                   <Divider inset={true} />   
                   
                  
                   </Paper>


            </div>
          </div>
        </GridTile>
                   
        <GridTile
          cols={ 2}
          rows={ 1} >
          <div className="griddiv"> 
            <div style= {{float:'left'}}> 
             
             {/* add the main page news feed here */}

             <Paper style={{height: 350,
                       width: 600,
                       margin: 5,
                       float:'left',
                       align:'left',
                       textAlign: 'center',
                       display: 'inline-block',}} zDepth={0}>
                   
                   <div>
                    <Avatar style={{float:'left'}} src="https://pbs.twimg.com/profile_images/874974596931371008/R5OJdnqW_400x400.jpg" />
                   
                    <div style={{float:'left'}} ><a href="/" style={{textDecoration:'none'}}>State Bank </a>&nbsp;
                      @TheOfficialSBI  &nbsp; &nbsp; 
                      <a href="/" style={{textDecoration:'none'}}>  12h </a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                      &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; 
                      <IconMenu
                         iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                         anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                         targetOrigin={{horizontal: 'left', vertical: 'top'}} >
                         <MenuItem primaryText="Copy link to tweet" />
                         <MenuItem primaryText="Embed tweet" />
                       </IconMenu>
                     </div>
                   
                     <span> <br /> <br/> </span>
                   
                     <div id="someDiv" style={{float:'left',textAlign:'left'}} >
                     You can now link your Aadhaar with CIF through internet banking on a real time basis! 
                     Log in to your account here: https://www.onlinesbi.com/  </div>
                   
                   
                   <div>
                     <img src="https://pbs.twimg.com/media/DQR_N1tU8AAH3S-.jpg"
                     height=" 200" width="450"/>
                   </div> 
                   
                   <div>
                   <ul style={{listStyle:'none',float:'left'}}>
                   <li style={{display:'inline-block'}}>
                   <FlatButton style={{ 'vertical-Align':"middle"}}  
                         icon={<FontIcon className="material-icons" > comment </FontIcon >} / >
                   
                   </li> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                   <li style={{display:'inline-block'}}>
                   <FlatButton style={{ 'vertical-Align':"middle"}}  
                         icon={<FontIcon className="material-icons" > favorite </FontIcon >} / >
                   </li> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                   <li style={{display:'inline-block'}}>
                   <FlatButton style={{ 'vertical-Align':"middle"}}  
                         icon={<FontIcon className="material-icons" > transform </FontIcon >} / >
                   </li>
                   </ul>
                   </div>  
                   </div>
                   
                   

                   </Paper>


            </div>
          </div>
        </GridTile>
        
        </GridList>
</div>
</div>
</li>
</ul>
</div>






  



  </div>   
);

export default MySearchComponent;