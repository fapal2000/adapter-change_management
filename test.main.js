const options = {
  url: 'https://dev84102.service-now.com/',
  username: 'admin',
  password: 'Fapal_64'
};
const request = require('request');
const ServiceNowConnector = require('./connector.js')





// Import built-in Node.js package path.
//const path = require('path');

/**
 * Import the ServiceNowConnector class from local Node.js module connector.js.
 *   and assign it to constant ServiceNowConnector.
 * When importing local modules, IAP requires an absolute file reference.
 * Built-in module path's join method constructs the absolute filename.
 */
//const ServiceNowConnector = require(path.join(__dirname, './connector.js'));

/**
 * @function mainOnObject
 * @description Instantiates an object from the imported ServiceNowConnector class
 *   and tests the object's get and post methods.
 */
function mainOnObject() {
  // Instantiate an object from class ServiceNowConnector.
  const connector = new ServiceNowConnector(options);
  // Test the object's get and post methods.
  // You must write the arguments for get and post.
  /*
  connector.get({ serviceNowTable: 'change_request' },(data, error) => {
    if (error) {
      return console.error(`\nError returned from GET request:\n${JSON.stringify(error)}`);
    }
    console.log(`\nResponse returned from GET request:\n${JSON.stringify(data)}`)
    let recordFound=JSON.parse(data.body).result;
    const tickets=[];
    recordFound.forEach((record) =>{
        tickets.push({
            change_ticket_number : record.number,
            change_ticket_key : record.sys_id,
            active : record.active,
            priority : record.priority,
            description : record.description,
            work_start : record.work_start,
            work_end: record.work_end
        }  )
    })
    console.log(`\n----TICKETS :\n${JSON.stringify(tickets)}`)
  });
  */
  connector.post({ serviceNowTable: 'change_request' },(data, error) => {
    if (error) {
      console.error(`\nError returned from POST request:\n${JSON.stringify(error)}`);
    }
    console.log(`\nResponse returned from POST request:\n${JSON.stringify(data)}`)
  });

}

// Call mainOnObject to run it.
mainOnObject();