import React from 'react';

class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: []
      }
	  
	  this.setStateHandler = this.setStateHandler.bind(this);
   }
   
   setStateHandler() {
      var newData = '{"club":{"id":1,"name":"Kelab Darul Ehsan"},"flights":[' + 
				'{"minPax":2,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"07:00","booked":1,"matrix_id":1,"reserve_status":null,"prices":{"flight":"90.0","cart":"100.0","caddy":"90.0","insurance":"90.0","note":"","insurance_mode":1}},' +
				'{"minPax":2,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"07:15","booked":null,"matrix_id":2,"reserve_status":null,"prices":{"flight":"90.0","cart":"100.0","caddy":"90.0","insurance":"90.0","note":"","insurance_mode":1}},' +
				'{"minPax":2,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"07:30","booked":null,"matrix_id":3,"reserve_status":null,"prices":{"flight":"90.0","cart":"100.0","caddy":"90.0","insurance":"90.0","note":"","insurance_mode":1}},' +
				'{"minPax":2,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"07:45","booked":null,"matrix_id":4,"reserve_status":null,"prices":{"flight":"90.0","cart":"100.0","caddy":"90.0","insurance":"90.0","note":"","insurance_mode":1}},' +
				'{"minPax":2,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"08:00","booked":null,"matrix_id":5,"reserve_status":null,"prices":{"flight":"90.0","cart":"100.0","caddy":"90.0","insurance":"90.0","note":"","insurance_mode":1}},' +
				'{"minPax":2,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"08:30","booked":null,"matrix_id":6,"reserve_status":null,"prices":{"flight":"90.0","cart":"100.0","caddy":"90.0","insurance":"90.0","note":"","insurance_mode":1}},' +
				'{"minPax":2,"maxPax":4,"minCart":0,"maxCart":2,"minCaddy":0,"maxCaddy":2,"tee_time":"09:00","booked":null,"matrix_id":7,"reserve_status":null,"prices":{"flight":"90.0","cart":"100.0","caddy":"90.0","insurance":"90.0","note":"","insurance_mode":1}},' +
				'{"minPax":3,"maxPax":4,"minCart":1,"maxCart":2,"minCaddy":1,"maxCaddy":2,"tee_time":"16:00","booked":null,"matrix_id":14,"reserve_status":null,"prices":{"flight":"180.0","cart":"100.0","caddy":"200.0","insurance":"50.0","note":"Free:-\r\n* drinks","insurance_mode":1}},' +
				'{"minPax":3,"maxPax":4,"minCart":1,"maxCart":2,"minCaddy":1,"maxCaddy":2,"tee_time":"16:30","booked":null,"matrix_id":15,"reserve_status":null,"prices":{"flight":"180.0","cart":"100.0","caddy":"200.0","insurance":"50.0","note":"Free:-\r\n* drinks","insurance_mode":1}},' +
				'{"minPax":3,"maxPax":4,"minCart":1,"maxCart":2,"minCaddy":1,"maxCaddy":2,"tee_time":"17:00","booked":null,"matrix_id":16,"reserve_status":null,"prices":{"flight":"180.0","cart":"100.0","caddy":"200.0","insurance":"50.0","note":"Free:-\r\n* drinks","insurance_mode":1}},' +
				'{"minPax":3,"maxPax":4,"minCart":1,"maxCart":2,"minCaddy":1,"maxCaddy":2,"tee_time":"17:30","booked":null,"matrix_id":17,"reserve_status":null,"prices":{"flight":"180.0","cart":"100.0","caddy":"200.0","insurance":"50.0","note":"Free:-\r\n* drinks","insurance_mode":1}},' +
				'{"minPax":3,"maxPax":4,"minCart":1,"maxCart":2,"minCaddy":1,"maxCaddy":2,"tee_time":"18:00","booked":null,"matrix_id":18,"reserve_status":null,"prices":{"flight":"180.0","cart":"100.0","caddy":"200.0","insurance":"50.0","note":"Free:-\r\n* drinks","insurance_mode":1}},' +
				'{"minPax":3,"maxPax":4,"minCart":1,"maxCart":2,"minCaddy":1,"maxCaddy":2,"tee_time":"18:30","booked":null,"matrix_id":19,"reserve_status":null,"prices":{"flight":"180.0","cart":"100.0","caddy":"200.0","insurance":"50.0","note":"Free:-\r\n* drinks","insurance_mode":1}},' +
				'{"minPax":3,"maxPax":4,"minCart":1,"maxCart":2,"minCaddy":1,"maxCaddy":2,"tee_time":"19:00","booked":null,"matrix_id":20,"reserve_status":null,"prices":{"flight":"180.0","cart":"100.0","caddy":"200.0","insurance":"50.0","note":"Free:-\r\n* drinks","insurance_mode":1}}],' +
				'"queryData":{"date":"14/07/2016","query":""}}';
	  var item = JSON.parse(newData);
      var myArray = this.state.data;
      myArray.push(item)
      this.setState({data: myArray})
   };
	
   render() {
	  var tableClass = 'table table-bordered table-striped';
	  var tableStyle = {
         height:100%
      }
      var thStyle = {
         text-align:center
      }
	  return (
         <div>
			<table class={tableClass} style={tableStyle}>
				<thead>
					<tr>
						<th style={thStyle}></th>
						{this.state.data.flights.map((flight, i) ? <TableHeadColumn key = {i} data = {flight} />)}
					</tr>
				</thead>
				</tbody>
					<tr>
						<TableRowHead headerProp = {this.state.data.queryData.date} />
						{this.state.data.flights.map((flight, i) ? <TableRowColumn key = {i} data = {flight} />)}
					</tr>
				</tbody>
			</table>
         </div>
      );
   }
}

class TableHeadColumn extends React.Component {
   render() {
	  var thStyle = {
		 text-align:center
	  }
	  
      return (
         <th style={thStyle}>
            {this.props.data.tee_time}
         </th>
      );
   }
}

class TableRowHead extends React.Component {
   render() {
	  var thStyle = {
		 text-align:center
	  }
	  
      return (
         <th style={thStyle}>
            {this.props.headerProp}
         </th>
      );
   }
}

class TableRowColumn extends React.Component {
   render() {
	  var divStyle = {
         padding:5px
      }
	  dataTrigger
	  var myStyle = {
         background-color:#fff,
          padding:0px
      }
	  var status = "Available";
	  
	  if(this.props.data.booked != null) {
		  status = "Reserved";
		  myStyle = {
			background-color:#f00,
			padding:0px
		  }
	  }
	  else if(newObj.flights[i].reserve_status != null) {
		  status = "Temporarily Unavailable";
		  myStyle = {
			background-color:#ff0,
			padding:0px
		  }
	  }
	  
      return (
         <td style= {myStyle} >
            <PopOver />
         </td>
      );
   }
}

class PopOver extends React.Component {
	render() {	  
      return (
         <div>
            <div class="popover popover--bottom popover--active">
			  <a href="#" class="popover_trigger" />
			  <div class="popover_content">
				your content here
			  </div>
			</div>
         </div>
      );
   }
}

export default App;