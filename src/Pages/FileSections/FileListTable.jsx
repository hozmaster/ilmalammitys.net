/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from 'react'
import {Header, Table} from 'semantic-ui-react'
import TableRowLink from './TableRowLink'

import theGadget from '../../data/gadget_single_item';

class FileListTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tableData: theGadget, activePage: 1};
    }

    render() {
        const {tableData} = this.state;

        return (
            <div>
                {Object.values(tableData["data"].map(
                    ({title, files}) => {
                        return (
                            <div>
                                <Header style={{marginTop: "2em"}} as={'h4'}> {title} </Header>
                                <Table compact fullWidth>
                                    <Table.Body>
                                        {Object.values(files.map(
                                            ({title, url}) => {
                                                return (
                                                    <Table.Row>
                                                        <Table.Cell> <TableRowLink text={title} url={url}/>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                );
                                            }
                                        ))}
                                    </Table.Body>
                                </Table>
                            </div>
                        )
                    }))}
            </div>
        )
    }
}


export default FileListTable;