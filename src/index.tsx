import { render } from 'preact';
import './style.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Ad4mConnectUI from "@perspect3vism/ad4m-connect";
import { useEffect, useState } from 'preact/hooks';
import { getAd4mClient } from '@perspect3vism/ad4m-connect'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import SelectPerspective from './selectPerspective';
import Event from './model/event';
import CreateEventModal from './createEventModal';
import { PerspectiveProxy } from '@perspect3vism/ad4m';

const localizer = momentLocalizer(moment)

const ad4mConnect = Ad4mConnectUI({
	appName: "Calendar-Example-App",
	appDesc: "Calendar app to track events",
	appUrl: window.location.origin,
	appDomain: window.location.origin,
	appIconPath: "https://loremflickr.com/320/240",
	capabilities: [{ with: { domain: "*", pointers: ["*"] }, can: ["*"] }],
  });


export function App() {
	const [perspective, setPerspective] = useState<PerspectiveProxy>();
	const [isConnected, setIsConnected] = useState(false);
	const [startDate, setStartDate] = useState();
	const [events, setEvents] = useState([]);
	const [endDate, setEndDate] = useState();
	const [showCreateEventModal, setShowCreateEventModal] = useState(false);

	useEffect(() => {
		ad4mConnect.connect().then(async (client) => {
			console.log('connected', client)
			const isLocked = await client.agent.isLocked();
			setIsConnected(!isLocked)
		})
	}, [])

	// useEffect(() => {
	// 	const path = window.location.pathname.replace('/', '');

	// 	console.log(path)

	// 	if (path) {
	// 		getAd4mClient().then(async (client) => {
	// 			setTimeout(async () => {
	// 				const perspective = await client.perspective.byUUID(path)
	// 				setPerspective(perspective)
	// 			}, 1000)
	// 		})
	// 	}
	// }, [])

	console.log("wow", perspective)

	const onSelectSlotShowModal = async ({ start, end }) => {
		setStartDate(start);
		setEndDate(end);
		setShowCreateEventModal(true);
	}

	const createEvent = async ({ startDate, endDate, name, resource, allDay }) => {
		console.log('a', { startDate, endDate, name, resource, allDay })
		await perspective.ensureSDNASubjectClass(Event);

		// console.log(await perspective.getSdna())
		
		const event = new Event(perspective);
		event.start = startDate;
		event.end = endDate;
		event.title = name;
		event.allDay = allDay;

		await event.save();

		setShowCreateEventModal(false);
	}

	const resetForm = () => {
		setEndDate(null);
		setStartDate(null);
		setShowCreateEventModal(false);
	}

	useEffect(() => {
		function sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
		  }

		const run = async () => {
			console.log('lol', perspective)
			if (perspective && isConnected) {
				await perspective.ensureSDNASubjectClass(Event);
				// await sleep(10000)
				// console.log('lol 1', await perspective.getSdna())
				const events = await Event.all(perspective);
				console.log('lol 2', events)
				const newEvents = events.map(e => {
					const event = e;

					event.start = new Date(Date.parse(event.start))
					event.end = new Date(Date.parse(event.end))
					return event
				})

				// console.log('events', newEvents, await perspective.getSdna())

				setEvents(newEvents)
			}
		}

		run()
	}, [perspective, showCreateEventModal, isConnected])

	return (
		<div className="main">
			<Calendar
				defaultView="week"
				selectable={true}
				onSelectSlot={e => onSelectSlotShowModal(e)}
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				style={{ height: '100vh', width: '100vw' }}
			/>
			{!perspective && isConnected && <SelectPerspective
				perspective={perspective}
				setPerspective={setPerspective}
			/>}
			{
				showCreateEventModal && <CreateEventModal 
					createEvent={createEvent}
					cancel={resetForm}
					startDate={startDate}
					endDate={endDate}
				/>
			}
		</div>
	);
}

render(<App />, document.getElementById('app'));
