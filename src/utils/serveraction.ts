"use server"
async function getVideoId(title:string) {
    const encodedTitle = encodeURIComponent(title)
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodedTitle}&key=${process.env.YOUTUBE_API_KEY}`
    try {
      const response = await fetch(url)
      const data = await response.json()
  
      if (data.items && data.items.length > 0) {
        return data.items[0].id.videoId
      } else {
        console.warn(`No video found for title: ${title}`)
        return null
      }
    } catch (error) {
      console.error('Error fetching video ID:', error)
      return null
    }
  }
  
  export default getVideoId