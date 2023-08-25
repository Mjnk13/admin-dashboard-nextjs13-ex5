'use client'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Placement } from 'react-bootstrap/esm/types';

type props = {
    placement?: Placement
    tooltipContext: string,
    childrenNode: JSX.Element
}

const CustomToolTip = (props: props) => {
    return ( 
        <OverlayTrigger
            placement={props.placement}
            overlay={<Tooltip>{props.tooltipContext}</Tooltip>}
        >
            {props.childrenNode}
        </OverlayTrigger>
    );
}
 
export default CustomToolTip;