import { ListObjectsV2Command, S3Client } from '@aws-sdk/client-s3'

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!
  }
})

async function getVideos(prefix: string, subFolderPrefix?: string) {
  const bucketName = process.env.NEXT_PUBLIC_AWS_IMAGES_BUCKET

  try {
    // Get the list of videos from the bucket
    const command = new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: subFolderPrefix ? `${prefix}/${subFolderPrefix}` : prefix,
      Delimiter: '/'
    })

    const data = await s3.send(command)

    const imagesUrls = await Promise.all(
      data.Contents?.filter(
        obj =>
          obj.Key?.endsWith('.jpg') ||
          obj.Key?.endsWith('.jpeg') ||
          obj.Key?.endsWith('.png') ||
          obj.Key?.endsWith('.webm')
      ).map(async object => {
        return `https://badem-media-images.s3.eu-central-1.amazonaws.com/${object.Key}`
      }) || []
    )

    if (!imagesUrls || imagesUrls.length === 0)
      throw new Error('no videos founded')

    return imagesUrls
  } catch (error) {
    console.log('Aws get videos function ' + error)
    return null
  }
}

export default getVideos
