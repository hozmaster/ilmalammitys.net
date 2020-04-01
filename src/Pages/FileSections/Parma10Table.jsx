/*
 * Copyright (c) 2020.  Olli-Pekka Wallin All rights reserved
 */

import React from 'react'
import { Table } from 'semantic-ui-react'

const Parma10Table = () => (
    <Table singleLine basic={"very"}>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Link</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell> Esite Parma 10 1/5 </Table.Cell>
                <Table.Cell> </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jamie Harington</Table.Cell>
                <Table.Cell>January 11, 2014</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jill Lewis</Table.Cell>
                <Table.Cell>May 11, 2014</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
)

export default Parma10Table