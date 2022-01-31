import React from 'react';
import {IconButton} from "@material-ui/core"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router-dom';
import LabelImportantIcon  from '@material-ui/icons/LabelImportant';


function Mail() {
  const history = useHistory()
  return (
  <div className='mail'>
    <div className='mail_tools'>
<div className='mail_toolsLeft'> 
<IconButton onClick={()=>history.push("/")}>
  <ArrowBackIcon/>
</IconButton>

<IconButton>
  <MoveToInboxIcon/>
</IconButton>

<IconButton>
  <ErrorIcon/>
</IconButton>

<IconButton>
  <DeleteIcon/>
</IconButton>

<IconButton>
  <MoreVertIcon/>
</IconButton>
</div>
    </div>
    <div className='mail_body'>
      <div className='mail_bodyHeader'>
<h2>Subject</h2>
<LabelImportantIcon className="mail_important"/>
<p>Title</p>
<p>10pm</p>
      </div>
      <div className="mail_message">
        This is a message
      </div>

    </div>
  </div>
  )
};

export default Mail;
