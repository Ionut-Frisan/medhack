import { useMemo } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import MedTimelineElement from './MedTimelineElement';

import './MedTimeline.scss';

const MedTimeline = ({ children, position, ...props }) => {
    
    const layout = useMemo(() => {
        if (position === 'left') return '1-column-left';
        if (position === 'right') return '1-column-right';
        return '2-columns';
    }, [position])

    const computedProps = useMemo(() => {
        return {
            ...props,
            layout,
            lineColor: '#525252',
        }
    }, [props]);

    return (
        <VerticalTimeline
            {...computedProps}
        >
            {children}
        </VerticalTimeline>
    )
}
MedTimeline.item = MedTimelineElement;
export default MedTimeline;