import React from 'react';
import PropTypes from 'prop-types';




const TableComp = props => {
        const headers = [
            "header1",
            "header2",
            "header3",
            "header4",
            "header5",
            "header6",
            "header7",
            "header8",
            "header9",
            "header10",
            "header11",
            "header12"
        ]
    
var generateHeaders = (headers) => {
    var header = headers.map((header, index) => {
      return (
        <th
          key={index}
          className={
            "Serial Numbercontent-align content-align"
          }
        >
          {header}
        </th>
      );
    });

    // alert(header);
    return header;
  };

var header = generateHeaders(headers);

    return (
        <div>
            <table className="poptab ">
                <thead>
                    <tr>
                        {/* {_hasactioncolumn ? <th>Action Columns</th> : null} */}

                        {header}
                    </tr>
                </thead>
                {/* <tbody>{this.generateColumns(input, coldata)}</tbody> */}
            </table>
        </div>
    );
};

TableComp.propTypes = {

};

export default TableComp;