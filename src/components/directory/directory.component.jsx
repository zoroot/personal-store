import React from 'react';
import './directory.styles.scss'
import MenuItem from './../menu-item/menu-item.component'


class Directory extends React.Component {
    constructor() {
        super();
    this.state ={
        sections: [
            {
              title: 'Chapeaux',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'shop/chapeaux'
            },
            {
              title: 'Vestes',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'shop/vestes'
            },
            {
              title: 'Chaussures',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: 'shop/chaussures'
            },
            {
              title: 'Femmes',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'shop/femmes'
            },
            {
              title: 'Hommes',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'shop/hommes'
            }
          ]
    }
    
    }



render() {
    return( 

        <div className='directory-menu'>
        {
            this.state.sections.map(({id, ...otherSectionProps})=> (
                <MenuItem key={id} {...otherSectionProps} />

            
            ))
        }
        </div>

    );
}

}

export default Directory; 