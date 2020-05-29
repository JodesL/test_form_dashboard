import React from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import CollectionsIcon from '@material-ui/icons/Collections';
import ComputerIcon from '@material-ui/icons/Computer';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
		<ListItem 
			button
			component={Link}
			to={"/"}>
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
			<ListItemText primary="Dashboard" />
		</ListItem>
		<ListItem 
			button 
			component={Link}
			to={"/launch_model"}>
			<ListItemIcon>
				<ComputerIcon />
			</ListItemIcon>
			<ListItemText primary="Launch Model" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<CollectionsIcon />
			</ListItemIcon>
			<ListItemText primary="Collections " />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<BarChartIcon />
			</ListItemIcon>
			<ListItemText primary="Reports" />
		</ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
  </div>
);
