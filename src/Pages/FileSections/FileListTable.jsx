/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from 'react'
import {Header, Table} from 'semantic-ui-react'
import TableRowLink from './TableRowLink'

import PropTypes from "prop-types"
import { connect } from "react-redux"
import {bindActionCreators} from 'redux';
import {changeActiveGadgetDevice} from "../../actions";

class FileListTable extends React.Component {
    static propTypes = {
        activeGadgetDevice:PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {tableData: this.props.activeGadgetDevice, activePage: 1};
    }

    onChange(e) {
        console.log(e);
    }

    render() {
        const {
            activeGadgetDevice
        } = this.props;

        return (
            <div>
                {Object.values(activeGadgetDevice["data"].map(function (object, i) {
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

const controlStateToProps = state => {
    const activeGadgetDevice = state.gadgetSelectionControls.activeGadgetDevice;
    return {
        activeGadgetDevice,
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ onChange: changeActiveGadgetDevice }, dispatch)
}
// const mapDispatchToProps = (dispatch) => ({
//     actions: bindActionCreators(Actions, dispatch)
// })


export default connect(controlStateToProps,mapDispatchToProps )(FileListTable);