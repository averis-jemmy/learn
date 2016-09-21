var monthNames = ["January","February","March","April","May","June",
		"July","August","September","October","November","December"];

function addDays(date, days) {
	var result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

function getSunday(day) {
	var date = new Date(day);
	switch(day.getDay()) {
		case 0:
			return date;
		case 1:
			return addDays(date, 6);
		case 2:
			return addDays(date, 5);
		case 3:
			return addDays(date, 4);
		case 4:
			return addDays(date, 3);
		case 5:
			return addDays(date, 2);
		case 6:
			return addDays(date, 1);
		default:
			break;
	}
}

function getMonday(day) {
	var date = new Date(day);
	switch(day.getDay()) {
		case 0:
			return addDays(date, -6);
		case 1:
			return date;
		case 2:
			return addDays(date, -1);
		case 3:
			return addDays(date, -2);
		case 4:
			return addDays(date, -3);
		case 5:
			return addDays(date, -4);
		case 6:
			return addDays(date, -5);
		default:
			break;
	}
}

function getTuesday(day) {
	var date = new Date(day);
	switch(day.getDay()) {
		case 0:
			return addDays(date, -5);
		case 1:
			return addDays(date, 1);
		case 2:
			return date;
		case 3:
			return addDays(date, -1);
		case 4:
			return addDays(date, -2);
		case 5:
			return addDays(date, -3);
		case 6:
			return addDays(date, -4);
		default:
			break;
	}
}

function getWednesday(day) {
	var date = new Date(day);
	switch(day.getDay()) {
		case 0:
			return addDays(date, -4);
		case 1:
			return addDays(date, 2);
		case 2:
			return addDays(date, 1);
		case 3:
			return date;
		case 4:
			return addDays(date, -1);
		case 5:
			return addDays(date, -2);
		case 6:
			return addDays(date, -3);
		default:
			break;
	}
}

function getThursday(day) {
	var date = new Date(day);
	switch(day.getDay()) {
		case 0:
			return addDays(date, -3);
		case 1:
			return addDays(date, 3);
		case 2:
			return addDays(date, 2);
		case 3:
			return addDays(date, 1);
		case 4:
			return date;
		case 5:
			return addDays(date, -1);
		case 6:
			return addDays(date, -2);
		default:
			break;
	}
}

function getFriday(day) {
	var date = new Date(day);
	switch(day.getDay()) {
		case 0:
			return addDays(date, -2);
		case 1:
			return addDays(date, 4);
		case 2:
			return addDays(date, 3);
		case 3:
			return addDays(date, 2);
		case 4:
			return addDays(date, 1);
		case 5:
			return date;
		case 6:
			return addDays(date, -1);
		default:
			break;
	}
}

function getSaturday(day) {
	var date = new Date(day);
	switch(day.getDay()) {
		case 0:
			return addDays(date, -1);
		case 1:
			return addDays(date, 5);
		case 2:
			return addDays(date, 4);
		case 3:
			return addDays(date, 3);
		case 4:
			return addDays(date, 2);
		case 5:
			return addDays(date, 1);
		case 6:
			return date;
		default:
			break;
	}
}

var GolfClubDashboard = React.createClass({
  propTypes: {
    club: React.PropTypes.object,
    data: React.PropTypes.object,
    selectedDays: React.PropTypes.array
  },
  getInitialState: function(){
	var monDate = new Date(getMonday(new Date()));
	var tuesDate = new Date(getTuesday(new Date()));
	var wednesDate = new Date(getWednesday(new Date()));
	var thursDate = new Date(getThursday(new Date()));
	var friDate = new Date(getFriday(new Date()));
	var saturDate = new Date(getSaturday(new Date()));
	var sunDate = new Date(getSunday(new Date()));
    return {
	selectedDays:[{"day":"Monday","date":monDate},{"day":"Tuesday","date":tuesDate},{"day":"Wednesday","date":wednesDate},{"day":"Thursday","date":thursDate},{"day":"Friday","date":friDate},{"day":"Saturday","date":saturDate},{"day":"Sunday","date":sunDate}],
	data:{"club":{"id":1,"name":"Kelab Darul Ehsan","photos":["https://novgolf-dev-photos.s3-ap-southeast-1.amazonaws.com/uploads/photo/avatar/3/banner400_39667.jpg","https://novgolf-dev-photos.s3-ap-southeast-1.amazonaws.com/uploads/photo/avatar/2/banner400_ormeau_golf_club_fairway.jpg","https://novgolf-dev-photos.s3-ap-southeast-1.amazonaws.com/uploads/photo/avatar/1/banner400_TealBendGolfClub-Hole16-960x410.jpg_rotatingGalleryFront.jpg"]},"flights":[{"minPax":3,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"07:00","booked":null,"matrix_id":13,"reserve_status":1,"user_reservation_id":null,"prices":{"flight":"240.0","cart":"100.0","caddy":"60.0","insurance":"40.0","note":"","insurance_mode":1}},{"minPax":3,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"07:07","booked":null,"matrix_id":14,"reserve_status":null,"user_reservation_id":null,"prices":{"flight":"240.0","cart":"100.0","caddy":"60.0","insurance":"40.0","note":"","insurance_mode":1}},{"minPax":3,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"07:30","booked":null,"matrix_id":15,"reserve_status":null,"user_reservation_id":null,"prices":{"flight":"240.0","cart":"100.0","caddy":"60.0","insurance":"40.0","note":"","insurance_mode":1}},{"minPax":3,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"08:00","booked":null,"matrix_id":16,"reserve_status":2,"user_reservation_id":null,"prices":{"flight":"240.0","cart":"100.0","caddy":"60.0","insurance":"40.0","note":"","insurance_mode":1}},{"minPax":3,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"08:30","booked":null,"matrix_id":17,"reserve_status":null,"user_reservation_id":null,"prices":{"flight":"240.0","cart":"100.0","caddy":"60.0","insurance":"40.0","note":"","insurance_mode":1}},{"minPax":3,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"09:00","booked":null,"matrix_id":18,"reserve_status":null,"user_reservation_id":null,"prices":{"flight":"240.0","cart":"100.0","caddy":"60.0","insurance":"40.0","note":"","insurance_mode":1}},{"minPax":3,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"09:30","booked":null,"matrix_id":19,"reserve_status":null,"user_reservation_id":null,"prices":{"flight":"240.0","cart":"100.0","caddy":"60.0","insurance":"40.0","note":"","insurance_mode":1}},{"minPax":3,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"10:00","booked":null,"matrix_id":20,"reserve_status":null,"user_reservation_id":null,"prices":{"flight":"240.0","cart":"100.0","caddy":"60.0","insurance":"40.0","note":"","insurance_mode":1}},{"minPax":3,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"16:00","booked":null,"matrix_id":21,"reserve_status":null,"user_reservation_id":null,"prices":{"flight":"240.0","cart":"100.0","caddy":"60.0","insurance":"40.0","note":"","insurance_mode":1}},{"minPax":3,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"16:30","booked":null,"matrix_id":22,"reserve_status":null,"user_reservation_id":null,"prices":{"flight":"240.0","cart":"100.0","caddy":"60.0","insurance":"40.0","note":"","insurance_mode":1}},{"minPax":3,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"17:00","booked":null,"matrix_id":23,"reserve_status":null,"user_reservation_id":null,"prices":{"flight":"240.0","cart":"100.0","caddy":"60.0","insurance":"40.0","note":"","insurance_mode":1}},{"minPax":3,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"17:30","booked":null,"matrix_id":24,"reserve_status":null,"user_reservation_id":null,"prices":{"flight":"240.0","cart":"100.0","caddy":"60.0","insurance":"40.0","note":"","insurance_mode":1}},{"minPax":3,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"18:00","booked":null,"matrix_id":25,"reserve_status":null,"user_reservation_id":null,"prices":{"flight":"240.0","cart":"100.0","caddy":"60.0","insurance":"40.0","note":"","insurance_mode":1}},{"minPax":3,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"18:30","booked":null,"matrix_id":26,"reserve_status":null,"user_reservation_id":null,"prices":{"flight":"240.0","cart":"100.0","caddy":"60.0","insurance":"40.0","note":"","insurance_mode":1}},{"minPax":3,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"19:00","booked":null,"matrix_id":27,"reserve_status":null,"user_reservation_id":null,"prices":{"flight":"240.0","cart":"100.0","caddy":"60.0","insurance":"40.0","note":"","insurance_mode":1}},{"minPax":3,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"19:30","booked":null,"matrix_id":28,"reserve_status":null,"user_reservation_id":null,"prices":{"flight":"240.0","cart":"100.0","caddy":"60.0","insurance":"40.0","note":"","insurance_mode":1}},{"minPax":3,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"20:00","booked":null,"matrix_id":29,"reserve_status":null,"user_reservation_id":null,"prices":{"flight":"240.0","cart":"100.0","caddy":"60.0","insurance":"40.0","note":"","insurance_mode":1}},{"minPax":3,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"20:30","booked":null,"matrix_id":30,"reserve_status":null,"user_reservation_id":null,"prices":{"flight":"240.0","cart":"100.0","caddy":"60.0","insurance":"40.0","note":"","insurance_mode":1}}],"queryData":{"date":"28/08/2016","query":""}}
    }
  },
  componentDidMount: function(){
    console.log(this.props.club);
  },
  render: function() {
    return (
      <div>
        <table className="table table-striped table-bordered table-responsive">
		<thead>
			<tr>
				<th></th>
				{this.state.data.flights.map((flight, i) => <TableColumnHeadDashboard key = {i} data = {flight} />)}
			</tr>
		</thead>
		<tbody>
			{this.state.selectedDays.map((day, i) => <TableRowDashboard key = {i} data = {this.state.data} selectedDay =  {day} />)}
		</tbody>
	</table>
      </div>
    );
  }
});

var TableColumnHeadDashboard = React.createClass({
  render: function() {
	var myStyle = {
		textAlign:'center'
	}
    return (
	<th style={myStyle}>
		{this.props.data.tee_time}
	</th>
    );
  }
});

var TableRowDashboard = React.createClass({
  render: function() {
	var date = new Date(this.props.selectedDay.date);
    return (
	<tr>
		<TableRowHeadDashboard data = {this.props.selectedDay.day + " - " + date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear()} />
		{this.props.data.flights.map((flight, i) => <TableRowColumnDashboard key = {i} data = {flight} />)}
	</tr>
    );
  }
});

var TableRowHeadDashboard = React.createClass({
  render: function() {
	var myStyle = {
		textAlign:'center'
	}
    return (
	<th style={myStyle}>
		{this.props.data}
	</th>
    );
  }
});

var TableRowColumnDashboard = React.createClass({
  render: function() {
	var myStyle = {
		background:'#FFFFFF',
		padding:0
	}

	if(this.props.data.reserve_status != null) {
		if(this.props.data.reserve_status == 0 || this.props.data.reserve_status == 1) {
			myStyle = {
				background:'#FFFF00',
				padding:0
			}
		}
		else {
			myStyle = {
				background:'#FF0000',
				padding:0
			}
		}
	}
    return (
	<td style={myStyle}>
		<a data-trigger='focus' tabIndex='0' role='button' />
	</td>
    );
  }
});
