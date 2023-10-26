import { useEffect, useMemo, useState } from "preact/hooks";
import { getAd4mClient } from '@perspect3vism/ad4m-connect'
import { PerspectiveProxy } from "@perspect3vism/ad4m";

function getUrl() {
	const url = window.location.href;
	return url[3]
}

function Button({ onClick, children }) {
    return (
        <div onClick={onClick}>
            {children}
        </div>
    )
}

export default function CreateEventModal({ createEvent, cancel, endDate, startDate }) {
    const [formData, setFormData] = useState({
        name: '',
        startDate,
        endDate,
        allDay: false,
        resource: '',
      });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
        ...formData,
        [name]: newValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        createEvent(formData);
    };

    const handleCancel = () => {
        cancel()
        console.log('Form Canceled');
    };

    return (
        <div className="mainModal">
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                </label>
                <br />

                <label>
                    Start Date:
                    <input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} />
                </label>
                <br />

                <label>
                    End Date:
                    <input type="date" name="endDate" value={formData.endDate} onChange={handleInputChange} />
                </label>
                <br />

                <label>
                    All Day:
                    <input type="checkbox" name="allDay" checked={formData.allDay} onChange={handleInputChange} />
                </label>
                <br />

                <label>
                    Resource:
                    <input type="text" name="resource" value={formData.resource} onChange={handleInputChange} />
                </label>
                <br />

                <button type="button" onClick={handleCancel}>
                    Cancel
                </button>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}