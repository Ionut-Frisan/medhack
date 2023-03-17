import { useMemo } from 'react';

import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";

const MedTimelineElement = ({ children, customClass = '', icon, title, status, ...props }) => {
    const classComputed = useMemo(() => {
        return `vertical-timeline-element--work${!!customClass ? customClass : ''}`
    }, [customClass]);

    const iconStyle = useMemo(() => {
        const bgMap = {
            done: 'green',
            info: 'teal',
            error: 'red',
            warning: 'orange',
            default: 'blue',
        }
        const colorMap = {
            done: 'white',
            info: 'black',
            error: 'black',
            warning: 'black',
            default: 'white',
        };
        return {
            background: bgMap[status] || bgMap.default,
            color: colorMap[status] || colorMap.default,
        }
    }, [status]);

    const iconComputed = useMemo(() => {
        const iconMap = {
            done: <FaCheck/>,
            info: <FaInfo/>,
            error: <FaTimes/>,
            warning: <FaExclamationTriangle/>,
            default: icon || <></>,
        };
        return iconMap[status] || iconMap.default;
    }, [status]);

    return (
        <VerticalTimelineElement
            iconStyle={iconStyle}
            icon = {iconComputed}
            // contentArrowStyle={{ borderRight: '7px solid ' }}
        >
            <h3 className='vertical-timeline-element-title'>
                {title}
            </h3>
            {children}
        </VerticalTimelineElement>
    )
}

export default MedTimelineElement;