
import React from 'react';
import {List, Link, ListItem} from '@mui/material';

import './ContactsBar.css';

export const externalLinks = {
    "Github": { "url": "https://github.com/JBerny", "icon": "assets/icons/icons8-github.svg" },
    "Linkedin": { "url": "https://linkedin.com/in/francesco-bernardi-ams/", "icon": "assets/icons/icons8-linkedin.svg" }
};


export function ContactsBar(props) {

    return (
        <div>
            <List className='App-contacts-bar' >
                {   props.externalLinks ?
                    Object.keys(props.externalLinks).map((key) => {
                        const extLink = props.externalLinks[key];
                        return (
                            <List key={key} xs={4}>
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
        </div>
    );
}
