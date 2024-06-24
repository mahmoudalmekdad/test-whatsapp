
import { NextResponse } from "next/server";
import axios from 'axios'
// To handle a GET request to /api
export async function GET(req:any) {
  // Do whatever you want
  let mode = req.query["hub.mode"]
  let challange = req.query["hub.challenge"]
  let token = req.query["hub.verify_token"]

  console.log(req.query)
  console.log(req.body)

  const mytoken = "TestByJawad"

  if(mode && token){
      if(mode === "subscribe" && token === mytoken){
          // res.status(200).send(challange)
          return NextResponse.json(challange, { status: 200 });
      }else{  
        return NextResponse.json({res: 'res.status(403)'}, { status: 403 });
      }
  }else{
      return NextResponse.json({res: 'res.status(403)'}, { status: 403 });
  }
}

// To handle a POST request to /api
export async function POST(req: Request) {
  // Do whatever you want
  let body_param: any = req.body
  console.log(JSON.stringify(body_param,null,2))

  if(body_param && body_param.object){
      if(body_param.entry && 
          body_param.entry[0].changes &&
          body_param.entry[0].changes[0].value.messages &&
          body_param.entry[0].changes[0].value.messages[0]){

          let phone_no_id = body_param.entry[0].changes[0].value.metadata.phone_number_id
          let from = body_param.entry[0].changes[0].value.messages[0].from
          let msg_body = body_param.entry[0].changes[0].value.messages[0].text.body

          axios({
              method : "POST",
              url : `https://graph.facebook.com/v19.0/${phone_no_id}/messages?access_token=${`EAANrLF1TIn8BO5vaM4YohWbYNqlRg72pZBJ8eBM3KXdFQDuNMDUc8ZCgEWgrJPaEpNgIQnsJOZCOG8B3Y6NBCWjfEKhPYwkeiVVWJKsLY51LhBkIy6O5FR0ZAec4WyBFHRZC0Vci1CKWjmBzqFLHQJXlXNXAB9JlHyb0hkNxfEnAQXyvWHIrLlPvfTzak5lcSrvINZCuvDvYFwZBZCjZB`}`,
              data : {
                  messaging_product : "whatsapp",
                  to : from,
                  text : {
                      body:"Hi.. I'm Dr. Clinica, your message is "+msg_body
                  }
              },
              headers : {
                  "Content-Type" : "application/json"
              }
          }).then(function (response) {
              console.log(response)
          }).catch(function (error) {
              console.log(error.toJSON());
          });
          return NextResponse.json({ message: "res: status(200)" }, { status: 200 });
      }else{
        return NextResponse.json({ message: "res: (400) " }, { status: 200 });
    }
  }else{
    return NextResponse.json({ message: "res: (200) " }, { status: 200 });

  }
}