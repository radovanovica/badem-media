// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { FormDataType } from '@/hooks/useSendOrder'
import { sendEmail } from '@/utils/nodemailer'

type Data = {
    message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (req.method === 'POST') {
        const data: FormDataType = req.body

        try {
            await sendEmail({
                from: `Contact <${process.env.SMTP_FROM}>`,
                to: process.env.OFFICE_EMAIL,
                subject: `Nova poruka od ${data.email}`,
                html: `
            	<span>Ime: ${data.name}</span><br/>
            	<span>prezime: ${data.surname}</span><br/>
            	<span>Broj telefona: ${data.phone}</span><br/>
            	<span>Email: ${data.email}</span><br/>
            	<span>Ime kompanije: ${data.companyName}</span><br/>
            	<span>Dodatne informacije: ${data.additionalInfo}</span> 
            	`,
            })

            return res.status(200).json({ message: 'Success!' })
        } catch (error: any) {
            console.log(error)
            return res.status(400).json({ message: error.message as string })
        }
    }
    res.status(400).json({ message: 'Bad Request' })
}

export default handler
