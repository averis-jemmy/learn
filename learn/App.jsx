import React from 'react';
import Table from 'react-bootstrap/lib/Table';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Button from 'react-bootstrap/lib/Button';
import DayPicker, { DateUtils } from "react-day-picker";

class App extends React.Component {
	constructor() {
		super();
		var _this = this;

		var date = new Date();
		this.state = {
			selectedDays: [{ "day": "Monday", "date": date.setDate(date.getDate() + (-6)) }, { "day": "Tuesday", "date": date.setDate(date.getDate() + (-5)) }, { "day": "Wednesday", "date": date.setDate(date.getDate() + (-4)) }, { "day": "Thursday", "date": date.setDate(date.getDate() + (-3)) }, { "day": "Friday", "date": date.setDate(date.getDate() + (-2)) }, { "day": "Saturday", "date": date.setDate(date.getDate() + (-1)) }, { "day": "Sunday", "date": date }],
			selectedDay: new Date(),
			data: null
		}

		$.getJSON( "data.json", function( data ) {
			_this.setState({data: data})
		});
	}
	
	handleDayClick(e, day) {
		this.setState({ selectedDay: day });
		var date = new Date(day);
		switch(day.getDay()) {
			case 0:
				this.setState({selectedDays: [ { "day": "Monday", "date": date.setDate(date.getDate() + (-6)) },
					{ "day": "Tuesday", "date": date.setDate(date.getDate() + (-5)) },
					{ "day": "Wednesday", "date": date.setDate(date.getDate() + (-4)) },
					{ "day": "Thursday", "date": date.setDate(date.getDate() + (-3)) },
					{ "day": "Friday", "date": date.setDate(date.getDate() + (-2)) },
					{ "day": "Saturday", "date": date.setDate(date.getDate() + (-1)) },
					{ "day": "Sunday", "date": date }
				]});
				break;
			case 1:
				this.setState({selectedDays: [ { "day": "Monday", "date": date.setDate(date.getDate() + (-5)) },
					{ "day": "Tuesday", "date": date.setDate(date.getDate() + (-4)) },
					{ "day": "Wednesday", "date": date.setDate(date.getDate() + (-3)) },
					{ "day": "Thursday", "date": date.setDate(date.getDate() + (-2)) },
					{ "day": "Friday", "date": date.setDate(date.getDate() + (-1)) },
					{ "day": "Saturday", "date": date },
					{ "day": "Sunday", "date": date.setDate(date.getDate() + (1)) }
				]});
				break;
			case 2:
				this.setState({selectedDays: [ { "day": "Monday", "date": date.setDate(date.getDate() + (-4)) },
					{ "day": "Tuesday", "date": date.setDate(date.getDate() + (-3)) },
					{ "day": "Wednesday", "date": date.setDate(date.getDate() + (-2)) },
					{ "day": "Thursday", "date": date.setDate(date.getDate() + (-1)) },
					{ "day": "Friday", "date": date },
					{ "day": "Saturday", "date": date.setDate(date.getDate() + (1)) },
					{ "day": "Sunday", "date": date.setDate(date.getDate() + (2)) }
				]});
				break;
			case 3:
				this.setState({selectedDays: [ { "day": "Monday", "date": date.setDate(date.getDate() + (-3)) },
					{ "day": "Tuesday", "date": date.setDate(date.getDate() + (-2)) },
					{ "day": "Wednesday", "date": date.setDate(date.getDate() + (-1)) },
					{ "day": "Thursday", "date": date },
					{ "day": "Friday", "date": date.setDate(date.getDate() + (1)) },
					{ "day": "Saturday", "date": date.setDate(date.getDate() + (2)) },
					{ "day": "Sunday", "date": date.setDate(date.getDate() + (3)) }
				]});
				break;
			case 4:
				this.setState({selectedDays: [ { "day": "Monday", "date": date.setDate(date.getDate() + (-2)) },
					{ "day": "Tuesday", "date": date.setDate(date.getDate() + (-1)) },
					{ "day": "Wednesday", "date": date },
					{ "day": "Thursday", "date": date.setDate(date.getDate() + (1)) },
					{ "day": "Friday", "date": date.setDate(date.getDate() + (2)) },
					{ "day": "Saturday", "date": date.setDate(date.getDate() + (3)) },
					{ "day": "Sunday", "date": date.setDate(date.getDate() + (4)) }
				]});
				break;
			case 5:
				this.setState({selectedDays: [ { "day": "Monday", "date": date.setDate(date.getDate() + (-1)) },
					{ "day": "Tuesday", "date": date },
					{ "day": "Wednesday", "date": date.setDate(date.getDate() + (1)) },
					{ "day": "Thursday", "date": date.setDate(date.getDate() + (2)) },
					{ "day": "Friday", "date": date.setDate(date.getDate() + (3)) },
					{ "day": "Saturday", "date": date.setDate(date.getDate() + (4)) },
					{ "day": "Sunday", "date": date.setDate(date.getDate() + (5)) }
				]});
				break;
			case 6:
				this.setState({selectedDays: [ { "day": "Monday", "date": date },
					{ "day": "Tuesday", "date": date.setDate(date.getDate() + (1)) },
					{ "day": "Wednesday", "date": date.setDate(date.getDate() + (2)) },
					{ "day": "Thursday", "date": date.setDate(date.getDate() + (3)) },
					{ "day": "Friday", "date": date.setDate(date.getDate() + (4)) },
					{ "day": "Saturday", "date": date.setDate(date.getDate() + (5)) },
					{ "day": "Sunday", "date": date.setDate(date.getDate() + (6)) }
				]});
				break;
			default:
				break;
		}
	}

	render() {
		if(this.state.data == null || this.state.selectedDays == null) {
			return (
			 <div>
				
			 </div>
			);
		}
		  
		return (
			<div>
				<DayPicker
					onDayClick={ this.handleDayClick.bind(this) }
					selectedDays={ day => DateUtils.isSameDay(day, this.state.selectedDay) }
				/>
				<Table striped bordered condensed>
					<thead>
						<tr>
							<th></th>
							{this.state.data.flights.map((flight, i) => <TableHeadColumn key = {i} data = {flight} />)}
						</tr>
					</thead>
					<tbody>
						{this.state.selectedDays.map((day, i) => <TableRow key = {i} data = {this.state.data} selectedDay = {day} />)}
					</tbody>
				</Table>
			</div>
		);
	}
}

class TableHeadColumn extends React.Component {
	render() {
		var myStyle = {
			textAlign:'center'
		}
		return (
			<th style={myStyle}>
				{this.props.data.tee_time}
			</th>
		);
	}
}

class TableRow extends React.Component {
	render() {
		return (
			<tr>
				<TableRowHead data = {this.props.selectedDay.day + " - " + this.props.selectedDay.date} />
				{this.props.data.flights.map((flight, i) => <TableRowColumn key = {i} data = {flight} />)}
			</tr>
		);
	}
}

class TableRowHead extends React.Component {
	render() {
		var myStyle = {
			textAlign:'center'
		}
		return (
			<th style={myStyle}>
				{this.props.data}
			</th>
		);
	}
}

class TableRowColumn extends React.Component {
	render() {
		var myStyle = {
			background: '#FFFFFF',
			padding: 0
		}

		if(this.props.data.reserve_status != null) {
			if(this.props.data.reserve_status == 1) {
				myStyle = {
					background: '#FF0000',
					padding: 0
				}
			}
			else if(this.props.data.reserve_status == 2) {
				myStyle = {
					background: '#FFFF00',
					padding: 0
				}
			}

			return (
				<td style={myStyle}>
					<OverlayTrigger trigger="click" rootClose placement="bottom" overlay={<Popover title="Popover bottom"><strong>Holy guacamole!</strong><ReserveInfo data = {this.props.data.user_reservation} /></Popover>}>
						<a role='button' />
					</OverlayTrigger>
				</td>
			);
		}

		return (
			<td style={myStyle}>
				<OverlayTrigger trigger="click" rootClose placement="bottom" overlay={<Popover title="Popover bottom"><strong>Available for booking!</strong> Available!!! <a>Book Now</a></Popover>}>
					<a role='button' />
				</OverlayTrigger>
			</td>
		);
	}
}

class ReserveInfo extends React.Component {
	render() {
		return (
			<div>
				<table>
					<tr>
						<td>Name</td>
						<td>{this.props.data.user.name}</td>
					</tr>
					<tr>
						<td>{this.props.data.count_pax} Person(s)</td>
						<td>{this.props.data.actual_pax}</td>
					</tr>
					<tr>
						<td>{this.props.data.count_buggy} Buggy(s)</td>
						<td>{this.props.data.actual_buggy}</td>
					</tr>
					<tr>
						<td>{this.props.data.count_caddy} Caddy(s)</td>
						<td>{this.props.data.actual_caddy}</td>
					</tr>
					<tr>
						<td>{this.props.data.count_insurance} Insurance(s)</td>
						<td>{this.props.data.actual_insurance}</td>
					</tr>
					<tr>
						<td>Total</td>
						<td>{this.props.data.actual_pax+this.props.data.actual_buggy+this.props.data.actual_caddy+this.props.data.actual_insurance}</td>
					</tr>
				</table>
			</div>
		);
	}
}

export default App;