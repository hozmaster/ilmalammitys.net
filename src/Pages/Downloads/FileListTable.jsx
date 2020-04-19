/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from 'react'
import {Header, Table} from 'semantic-ui-react'
import TableRowLink from './TableRowLink'

const gadgetFiles = require("../../data/gadget_table_data.json");

class FileListTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            theGadget: this.props.selectGadget,
            activePage: 1
        };

    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectGadget !== this.props.selectGadget) {
            this.setState(
                {theGadget: this.props.selectGadget})
        }
    }

    getGadgetData(gadget) {
        return gadgetFiles.find(element => element.gadget === gadget);
    }

    render() {
        let tableData = this.getGadgetData(this.state.selectGadget);
        if (tableData === undefined) {
            tableData = this.getGadgetData(this.props.selectGadget);
        }
        return (
            <div>
                {Object.values(tableData["data"].map(function (object, i) {
                        return (
                            <div key={i}>
                                <Header style={{marginTop: "2em"}} as={'h4'}> {object.title} </Header>
                                <Table compact>
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