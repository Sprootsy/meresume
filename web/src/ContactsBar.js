import React from 'react';
import {List, Link, ListItem} from '@mui/material';

import './App.css';

export const externalLinks = {
    "Github": { "url": "https://github.com/JBerny", "icon": "assets/icons/icons8-github.svg" },
    "Linkedin": { "url": "https://linkedin.com/", "icon": "assets/icons/icons8-linkedin.svg" },
};


export function ContactsBar(props) {

    return (
        <List className='App-contacts-bar' >
            {   props.externalLinks ?
                Object.keys(props.externalLinks).map((key) => {
                    const extLink = props.externalLinks[key];
                    return (
                        <List item key={key} xs={4}>
                            <ListItem>
                                    <Link href={extLink['url']} 
                                        className={"App-logo-link"}
                                        target={"_blank"}>
                                        <img src={extLink['icon']}
                                            alt={`Logo for ${key}`}
                                            style={{
                                                height: "48px",
                                                margin: "4px"
                                            }} />
                                        
                                        {key}
                                    </Link>
                            </ListItem>
                        </List>
                    );
                })
                : null
            }
        </List>
    );
}
