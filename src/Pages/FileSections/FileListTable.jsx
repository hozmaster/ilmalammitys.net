/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from 'react'
import {Header, Table} from 'semantic-ui-react'
import TableRowLink from './TableRowLink'

const singleTable = require("../../data/gadget_single_item.json");

class FileListTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tableData: singleTable, activePage: 1};
    }

    render() {

        return (
            <div>
                {Object.values(this.state.tableData["data"].map(function (object, i) {
                        return (
                            <div key={i}>
                                <Header style={{marginTop: "2em"}} as={'h4'}> {object.title} </Header>
                                <Table compact >
                                        <Table.Body>
                                            {Object.values(object.files.map(function (object, i) {
                                                    return (
                                                        <Table.Row key={i}>
                                                            <Table.Cell> <TableRowLink text={object.title} url={object.url}/>
                                                            </Table.Cell>
                                                        </Table.Row>
                                                    );
                                                }
                                            ))}
                                        </Table.Body>
                                </Table>
                            </div>
                        )
                    }
                    ))}
            </div>
        )
    }
}

export default FileListTable;