import { SDNAClass, subjectProperty, subjectFlag, SubjectEntity } from '@perspect3vism/ad4m';

@SDNAClass({
    name: "Event"
})
class Event extends SubjectEntity {
    //@ts-ignore
        @subjectFlag({
        through: "calendar://type",
        value: "calendart://event"
    })
    type: string;

    @subjectProperty({
        through: "calendar://title",
        writable: true
    })
    title: string;
    
    @subjectProperty({
        through: "calendar://start",
        writable: true
    })
    start: string;

    @subjectProperty({
        through: "calendar://end",
        writable: true
    })
    end: string;

    @subjectProperty({
        through: "calendar://allDay",
        writable: true
    })
    allDay: boolean;
}

export default Event;