import React from "react"
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faAngleDoubleLeft, faBars } from "@fortawesome/free-solid-svg-icons"
import "../styles/sidebar.css"

function Sidebar({ items }) {
    return (
        <div className="sidebar">
            <List disablePadding dense>
                {items.map(({ label, name, items: subItems, ...rest }) => (
                    <React.Fragment key={name}>
                        <ListItem key={name} button {...rest}>
                            <ListItemText>{label}</ListItemText>
                        </ListItem>
                        {Array.isArray(subItems) ? (
                            <List disablePadding>
                                {subItems.map((subItem) => {
                                    return (
                                        <ListItem
                                            key={subItem.name}
                                            button
                                            dense
                                        >
                                            <ListItemText>
                                                <span className="sidebar-subitem-text">
                                                    {subItem.label}
                                                </span>
                                            </ListItemText>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        ) : null}
                    </React.Fragment>
                ))}
            </List>
        </div>
    )
}

export default Sidebar