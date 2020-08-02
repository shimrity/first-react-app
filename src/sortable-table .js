import React from 'react';

import { useState } from 'react';

import {} from 'lodash';

export default function SortableTable(props){
    const {data} = props;
    const tablestyle = {
        border: "1px solid green",
        backgroundColor: '#eee'

    }
    const header = data[0];
    const footer= data.slice(1);
    const [sortKey, setSortKey] = useState(0);
    
    _.sortBy(footer, row => row[sortKey]);
    
    return(
      <>
      <p>{sortKey}</p>
      <table style={tablestyle} >
          <thead >
                <tr>
                    {
                      header.map((Header,j)=>
                         <th key={j} onClick={e =>  setSortKey(j)}>{Header}</th>
                      )
                    }
                </tr>
                
          </thead>
         <tbody>
           {
                footer.map((row,i) =>(
                 
                   <tr key={i}>
                    {
                      row.map((item,j)=>
                         <td key={j}>{item}</td>
                      )
                    }
                   </tr>
                ))
           }
         </tbody>
       </table>
      </>

    )

}