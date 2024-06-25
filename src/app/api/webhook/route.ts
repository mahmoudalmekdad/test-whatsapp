import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { verifyWebhook } from '../../../../lib/verify';

export const revalidate = 0

export async function GET(request: Request) {
    const urlDecoded = new URL(request.url)
    const urlParams = urlDecoded.searchParams
    let mode = urlParams.get('hub.mode');
    let token = urlParams.get('hub.verify_token');
    let challenge = urlParams.get('hub.challenge');
    // console.log("aaaaaaaaaaaaaaa", mode, token, challenge)
    if (mode && token && challenge && mode == 'subscribe') {
      const isValid = token == "TestByJawad"
      if (isValid) {
        return new NextResponse(challenge)
      } else {
        return new NextResponse(null, { status: 403 })
      }
    } else {
      return new NextResponse(null, { status: 400 })
    }
  }

  export async function POST(request: NextRequest) {
    const headersList = headers();
    // console.log('aaaaaaaa',headersList)
    const xHubSigrature256 = headersList.get('x-hub-signature-256');
    const rawRequestBody = await request.text()

    if (!xHubSigrature256 || !verifyWebhook(rawRequestBody, xHubSigrature256)) {

        console.warn(`Invalid signature : ${xHubSigrature256}`)
        return new NextResponse(null, { status: 401 })
      }
      const webhookBody = JSON.parse(rawRequestBody) as any;
      if (webhookBody.entry.length > 0) {
          if(webhookBody.entry && 
              webhookBody.entry[0].changes &&
              webhookBody.entry[0].changes[0].value.messages &&
              webhookBody.entry[0].changes[0].value.messages[0]){

              let phone_no_id = webhookBody.entry[0].changes[0].value.metadata.phone_number_id
              let from = webhookBody.entry[0].changes[0].value.messages[0].from
              let msg_body = webhookBody.entry[0].changes[0].value.messages[0].text.body
        console.log("webhookBodyaaaaaaaaaaaaaa",phone_no_id,from,msg_body)
              }
      }
      const changes = webhookBody.entry[0].changes;
      console.log("changes", changes)
  }




































// import axios from 'axios'
// // To handle a GET request to /api
// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(req: NextRequest) {

//     // Parse the URL to get query parameters
//     const { searchParams } = new URL(req.url);

//     const mode = searchParams.get("hub.mode");
//     const challenge = searchParams.get("hub.challenge");
//     const token = searchParams.get("hub.verify_token");

//     console.log(searchParams);

//     const mytoken = "TestByJawad";

//     if (mode && token) {
//         if (mode === "subscribe" && token === mytoken) {
//             return NextResponse.json(Number(challenge), { status: 200 });
//         } else {
//             return NextResponse.json({ res: 'res.status(403)' }, { status: 403 });
//         }
//     } else {
//         return NextResponse.json({ res: 'res.status(403)' }, { status: 403 });
//     }
// }

// import { headers } from 'next/headers';

// import crypto from 'crypto';

// export function verifyWebhook(message: string, signature: string): boolean {
//     const prefix = 'sha256=';
//     if (!signature.startsWith(prefix)) {
//         return false;
//     }
//     const sigWithoutPrefix = signature.slice(prefix.length);
//     const hmac = crypto.createHmac('sha256', process.env.FACEBOOK_APP_SECRET);
//     const messageHash = hmac.update(message).digest("hex");
//     return sigWithoutPrefix === messageHash;
// }

// export async function POST(request: NextRequest) {
//     const headersList = headers();
//     const xHubSigrature256 = headersList.get('x-hub-signature-256');
//     const rawRequestBody = await request.text()

// }

// // To handle a POST request to /api
// // export async function POST(req: Request) {
// //   // Do whatever you want
// //   const { searchParams } = new URL(req.url);

// //   let body_param: any = req.body
// //   console.log(JSON.stringify(body_param,null,2))

// //   if(body_param && body_param.object){
// //       if(body_param.entry && 
// //           body_param.entry[0].changes &&
// //           body_param.entry[0].changes[0].value.messages &&
// //           body_param.entry[0].changes[0].value.messages[0]){

// //           let phone_no_id = body_param.entry[0].changes[0].value.metadata.phone_number_id
// //           let from = body_param.entry[0].changes[0].value.messages[0].from
// //           let msg_body = body_param.entry[0].changes[0].value.messages[0].text.body

// //           axios({
// //               method : "POST",
// //               url : `https://graph.facebook.com/v19.0/${phone_no_id}/messages?access_token=${`EAANrLF1TIn8BO5vaM4YohWbYNqlRg72pZBJ8eBM3KXdFQDuNMDUc8ZCgEWgrJPaEpNgIQnsJOZCOG8B3Y6NBCWjfEKhPYwkeiVVWJKsLY51LhBkIy6O5FR0ZAec4WyBFHRZC0Vci1CKWjmBzqFLHQJXlXNXAB9JlHyb0hkNxfEnAQXyvWHIrLlPvfTzak5lcSrvINZCuvDvYFwZBZCjZB`}`,
// //               data : {
// //                   messaging_product : "whatsapp",
// //                   to : from,
// //                   text : {
// //                       body:"Hi.. I'm Dr. Clinica, your message is "+msg_body
// //                   }
// //               },
// //               headers : {
// //                   "Content-Type" : "application/json"
// //               }
// //           }).then(function (response) {
// //               console.log(response)
// //           }).catch(function (error) {
// //               console.log(error.toJSON());
// //           });
// //           return NextResponse.json({ message: "res: status(200)" }, { status: 200 });
// //       }else{
// //         return NextResponse.json({ message: "res: (400) " }, { status: 200 });
// //     }
// //   }else{
// //     return NextResponse.json({ message: "res: (200) " }, { status: 200 });

// //   }
// // }


// // from chatGPT

// // export async function POST(req: NextRequest) {
// //     // Parse the request URL to get search parameters
// //     const { searchParams } = new URL(req.url);

// //     return NextResponse.json(req)

// //     // Parse the request body
// //     const body_param: any = await req.json();
// //     console.log(JSON.stringify(body_param, null, 2));

// //     if (body_param && body_param.object) {
// //         if (
// //             body_param.entry &&
// //             body_param.entry[0].changes &&
// //             body_param.entry[0].changes[0].value.messages &&
// //             body_param.entry[0].changes[0].value.messages[0]
// //         ) {
// //             let phone_no_id = body_param.entry[0].changes[0].value.metadata.phone_number_id;
// //             let from = body_param.entry[0].changes[0].value.messages[0].from;
// //             let msg_body = body_param.entry[0].changes[0].value.messages[0].text.body;

// //             try {
// //                 const response = await axios({
// //                     method: "POST",
// //                     url: `https://graph.facebook.com/v19.0/${phone_no_id}/messages?access_token=${`EAANrLF1TIn8BO5vaM4YohWbYNqlRg72pZBJ8eBM3KXdFQDuNMDUc8ZCgEWgrJPaEpNgIQnsJOZCOG8B3Y6NBCWjfEKhPYwkeiVVWJKsLY51LhBkIy6O5FR0ZAec4WyBFHRZC0Vci1CKWjmBzqFLHQJXlXNXAB9JlHyb0hkNxfEnAQXyvWHIrLlPvfTzak5lcSrvINZCuvDvYFwZBZCjZB`}`,
// //                     data: {
// //                         messaging_product: "whatsapp",
// //                         to: from,
// //                         text: {
// //                             body: `Hi.. I'm Dr. Clinica, your message is ${msg_body}`
// //                         }
// //                     },
// //                     headers: {
// //                         "Content-Type": "application/json"
// //                     }
// //                 });
// //                 console.log(response.data);
// //                 return NextResponse.json({ message: "res: status(200)" }, { status: 200 });
// //             } catch (error: any) {
// //                 console.log(error.toJSON());
// //                 return NextResponse.json({ message: "res: status(500)", error: error.toJSON() }, { status: 500 });
// //             }
// //         } else {
// //             return NextResponse.json({ message: "res: status(400)" }, { status: 400 });
// //         }
// //     } else {
// //         return NextResponse.json({ message: "res: status(200)" }, { status: 200 });
// //     }
// // }
