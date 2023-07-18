import React from 'react'
import { StickyTableCell, StyledTableCell, StyledTableRow } from './CustomTable'
import { IconButton } from '@mui/material'
import { ReactComponent as DownArrow } from "../../assests/svg/dashboard/arrow-down.svg";
import { flexRender } from '@tanstack/react-table';
export const ExpandableRow = ({ data, expandData }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    return (
        <>
            <StyledTableRow >
                <StickyTableCell padding="checkbox">
                    <IconButton onClick={() => setIsExpanded(!isExpanded)}>
                        <DownArrow style={{ rotate: isExpanded ? '180deg' : '0deg' }} />
                    </IconButton>
                </StickyTableCell>
                {data.map((cell, i) => i !== 0 && (
                    cell.column.columnDef.isSticky ?
                        <StickyTableCell key={cell?.id}>
                            {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                            )}
                        </StickyTableCell> :
                        <StyledTableCell key={cell?.id}>
                            {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                            )}
                        </StyledTableCell>
                ))}
            </StyledTableRow>
            {isExpanded && (
                expandData.map((item, i) =>
                    <StyledTableRow key={i}>
                        <StyledTableCell padding="checkbox" />
                        {
                            Object.values(item).map((cell, index) => <StyledTableCell key={index}>{cell}</StyledTableCell>)
                        }
                    </StyledTableRow>
                )
            )}
        </>
    )
}
