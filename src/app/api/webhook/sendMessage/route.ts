// https://graph.facebook.com/v19.0/271263942745722/messages

import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    axios({
        method: "POST",
        // this is the phone number ID for Dr beauty number
        url: `https://graph.facebook.com/v19.0/271263942745722/messages`,
        data: {
            messaging_product: "whatsapp",
            to: "971582582618",
            text: {
                // body: "Hala Partner.. I'm Dr Clinica, your message is How are you"
                body: "This message from the CRM system (did you receive?)"
            }
        },
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${`EAANrLF1TIn8BOyN1YM7cdXFlqGVyFWivxFhfPWKzf7X7o95YHAxO78m28iS7znM3nGBAHyPgGpduUbDrGokRQY2Dqdmc0dKkt9wsQLnI0NqMrTcjhP6iqPH3yXO73D1mw27OQWYlgvZAoLT0y343jJOpoLBQw6TCwISygOLo4icHqbPkCd4GAmv2t7vMZAZC6XQtDjHYA9BtSCe`}`
        }
    }).then(function (response) {
        console.log(response.data)
        // res.json(response.data)
        return new NextResponse(response.data, { status: 200 })
    }).catch(function (error) {
        console.log(error.message);
        // res.json(error.message)
        return new NextResponse(error.message, { status: 404 })
    });
}