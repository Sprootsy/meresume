import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Masonry from '@mui/lab/Masonry';
import Link from '@mui/material/Link';

export function ArticleCard(props) {
    let cardStyle = {margin: '8px 2px 4px 2px', minHeight: '200px'};
    return (
        <Card sx={cardStyle}>
            <CardContent>
                <Typography variant='h5' component='div'
                    sx={{marginBottom: '4px', color: 'var(--title-color)'}}>
                {props.title}
                </Typography>
                <Typography>
                {props.content}
                </Typography>
                <Link href={props.href} sx={{color: 'var(--link-color)'}}
                    rel="noopener" target="_blank">See more</Link>
            </CardContent>
        </Card>
    );
}

export class ArticlesMasonry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <Masonry sx={{padding: '4px'}} columns={{xs: 1, sm: 2, md: 3}}>
                {this.props.children.map((child, index) => (
                    <div key={index}>
                        {child}
                    </div>
                ))}
            </Masonry>
        );
    }
}

