import {
  GetObjectCommand,
  ListObjectsV2Command,
  S3Client
} from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!
  }
})

async function getVideos(prefix: string, subFolderPrefix?: string) {
  const bucketName = process.env.NEXT_PUBLIC_AWS_BUCKET

  try {
    // Get the list of videos from the bucket
    const command = new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: subFolderPrefix ? `${prefix}/${subFolderPrefix}` : prefix,
      Delimiter: '/'
    })
    const data = await s3.send(command)

    const videoUrls = await Promise.all(
      data.Contents?.filter(obj => obj.Key?.endsWith('.mp4')).map(
        async object => {
          //badem-media-videos.s3.eu-central-1.amazonaws.com/divcibar/DIVCA+OFF+ROAD.mp4

          // const signedUrl = await getSignedUrl(s3, getObject, {})

          return `https://badem-media-videos.s3.eu-central-1.amazonaws.com/${object.Key}`
        }
      ) || []
    )

    if (!videoUrls || videoUrls.length === 0)
      throw new Error('no videos founded')

    // return videoUrls.filter(video => video.endsWith('.mp4'))
    return videoUrls
  } catch (error) {
    console.log('Aws get videos function ' + error)
    return null
  }
}

export default getVideos
