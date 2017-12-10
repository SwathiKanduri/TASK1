import React from 'react';
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


const avatarstyle={ color:'blue', backgroundColor:'indigo', size:30};
const paperstyle={height: 900,
    width: 300,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',};

   {/*  homepage:function(e){
      window.location="/";
    }   */}

const MyAwesomeReactComponent = () => (
    <div>
        <div className="twitheader">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <div style={{float:'left'}} >
  <FlatButton label="Home" style={{ 'vertical-Align':"middle"}}  
      icon={<FontIcon className="material-icons" > home </FontIcon >}
     // onClick={homepage()}
      / >
      <FlatButton label="Notifications" style={{ 'vertical-Align':"middle"}} 
      icon={<FontIcon className="material-icons" > notifications </FontIcon >} / >
       <FlatButton label="Messages" style={{verticalAlign:"middle"}} // secondary={true}
      icon={<FontIcon className="material-icons" >messages </FontIcon >} / >
        </div>  
        
  <div style={{float:'right'}} >
  <Avatar icon={<FontIcon className="material-icons">account_box</FontIcon >} style={avatarstyle} /> 
  <FlatButton label="tweet" style={{'vertical-Align':"middle"}} /> 
      {/*   */} 
  
  </div>
  </div> 
                     {/*  3 papers in the horizontal list  */} 
    <div>  
  <ul style={{listStyle:'none'}}> <li style={{display:'inline-block'}}>

    <Paper style={paperstyle} zDepth={2} > 
{/* <div  className="twitheader" > </div> */}

 <div style={{float:'left', backgroundColor: 'rgb(184, 201, 219)',backgroundClip:'padding-box', textAlign:'left',
  height: 80, }}> 

<span> <br/> <br/> </span>

 <Avatar size={60}>S  </Avatar> 

 <span> <br/> <br/> <br/>  </span>

 <table style={{border:10,align:'center'}}>
      <tr> <th> Swathi kanduri </th> </tr>
       <tr> <td> @swathik </td> </tr> </table>  
      
       <span> <br/> <br/>  </span>
      
 <table style={{border:40,align:'center',cellspacing:'20'}}>
      <tr> <th> tweets </th> <th> following </th> </tr>
       <tr> <td> 10 </td>  <td> 10 </td> </tr> </table> 

       <span> <br/> <br/> <br/> <br/> </span>  
 
 <Paper style={{height: 554,
    width: 300,
    margin: 0,
    marginTop:20,
    
    textAlign: 'left',
    display: 'inline-block',}}  zDepth={1} >

<div> <p style={{size:30,alignContent:'left'}} > <b> Trends for you </b>   <a href="/"> change </a></p> </div>

<div > 
 
 <List style={{float:'left'}}>

<ListItem primaryText={<p style={{color:'Blue',}}> #Brexit </p> } 
secondaryText={"Breakthrough' deal paves way for future trade talks"} 
secondaryTextLines={2}/>

<ListItem primaryText={<p style={{color:'Blue',}}> #Bitcoin </p> } 
secondaryText={"Bitcoin hits $17000 as bubble fears mount"}  
// disabled='true'  
secondaryTextLines={2}/>

<ListItem primaryText={<p style={{color:'Blue',}}> #Parallel Internet </p> } 
secondaryText={"Russia wants to build a 'parallel internet' in 2018"} 
secondaryTextLines={2}/>

<ListItem primaryText={<p style={{color:'Blue',}}> #Virtual Reality </p> } 
secondaryText={"How laptops are evolving into VR-enabled gaming monsters"} 
secondaryTextLines={2}/>

 </List>

</div>

 </Paper>

 </div>
 
 </Paper> </li>

    <li style={{display:'inline-block'}}>
    <Paper style={{height: 900,
    width: 550,
    margin: 10,
    float:'left',
    textAlign: 'center',
    display: 'inline-block',}} zDepth={2} > 
    
    <div> <div  style={{ textAlign: 'left',height: 30,padding: 20,backgroundColor: 'rgb(184, 201, 219)',
               backgroundClip:'padding-box' }}> 

           <Avatar size={60}> S  </Avatar> <div>
       <TextField  hintText="What's happening?" fullWidth={true}/> </div>
          </div> </div>  

<span> <br /> <br /> <br /> <br /> </span>

          <div> 
               {/*  write further feed code here */}

<Paper style={{height: 300,
    width: 510,
    margin: 5,
    // float:'left',
    align:'center',
    textAlign: 'center',
    display: 'inline-block',}} zDepth={2}> 

    <div>

 <Avatar style={{float:'left'}} src="https://pbs.twimg.com/profile_images/936662928513581061/tGI9u58H_400x400.jpg" />

 <div style={{float:'left'}} ><a href="/" style={{textDecoration:'none'}}> Amazon.com </a>&nbsp; &nbsp; &nbsp;
   @amazon  &nbsp; &nbsp; 
   <a href="/" style={{textDecoration:'none'}}>  24m </a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
   &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
   <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}} >
      <MenuItem primaryText="Copy link to tweet" />
      <MenuItem primaryText="Embed tweet" />
    </IconMenu>
  </div>

  <span> <br /> <br/> </span>

  <div id="someDiv" style={{float:'left'}} >
  For the picture perfect gift and ultimate stocking stuffer, 
  get them the new Polaroid POP Instant Print Digital Camera: http://amzn.to/2BNBYjM </div>

<div>
  <img src="https://pbs.twimg.com/media/DQdJ3xIVQAEv27c.jpg"
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

<span> <br/> <br/>   </span>


<div>
 <Avatar style={{float:'left'}} src="https://pbs.twimg.com/profile_images/839721704163155970/LI_TRk1z_400x400.jpg" />

 <div style={{float:'left'}} ><a href="/" style={{textDecoration:'none'}}> Google </a>&nbsp; &nbsp; &nbsp;
   @Google  &nbsp; &nbsp; 
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

  <div id="someDiv" style={{float:'left'}} >
  With a $1.5M grant, @Googleorg and @SocialWorks_Chi are teaming up to bring computer science and arts
  curriculum to Chicago Public Schools → http://goo.gl/x7zg8g  #CSEdWeek #SupportCPS </div>


<div>
  <img src="https://pbs.twimg.com/media/DQe9XZQUIAAftns.jpg:large"
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
    
    
    </Paper> </li>

    <li style={{display:'inline-block'}}>
    <Paper style={{height: 900,
    width: 300,
    margin: 10,
    float:'left',
    textAlign: 'center',
    display: 'inline-block',}} zDepth={2}> 
    
    <List>
        <Subheader > <h2 >Who to follow </h2> </Subheader>
         <ListItem
          leftAvatar={<Avatar src="F:\IMAD\INTERN STUFF\twitterapp\oppo logo.jpg" />}
          primaryText="Oppo Mobile India"
	 secondaryText={
            <p>
              <span > <FlatButton label="Follow" secondary={true} style={{ margin: 12,}} /></span> 
            </p>
             }
             disabled='true'
          secondaryTextLines={2} // to tell the secondary text can be in two lines]
        />
   <Divider inset={true} />   

         <ListItem
          leftAvatar={<Avatar src="F:\IMAD\INTERN STUFF\twitterapp\oppo logo.jpg" />}
          primaryText="Xbox"
	 secondaryText={
            <p>
              <span > <FlatButton label="Follow" secondary={true} style={{ margin: 12,}} /></span> 
            </p>
             }
             disabled='true'
          secondaryTextLines={2} // to tell the secondary text can be in two lines]
        />
 <Divider inset={true} />  

<ListItem
          leftAvatar={<Avatar src="F:\IMAD\INTERN STUFF\twitterapp\oppo logo.jpg" />}
          primaryText="Microsoft"
	 secondaryText={
            <p>
              <span > <FlatButton label="Follow" secondary={true} style={{ margin: 12,}} /></span> 
            </p>
             }
             disabled='true'
          secondaryTextLines={2} // to tell the secondary text can be in two lines]
        />

</List>
  
    </Paper> </li>  </ul>
    
  </div>

  </div>   




);

export default MyAwesomeReactComponent;