import VideoCard from "./VideoCard"

const VIDEO = [
    {
        title: "ARE YOU SERIOUS chip CPU | 2024 (English)",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        thumbnail: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/our-channel-design-template-9fdab8712b42f11eb983d58292f443af_screen.jpg?ts=1711801350",
        author: "Harkirat Singh",
        views: "1K",
        timestamp: "1 year",
    },
    {
        title: "How to make Single chip CPU | 2024 (English)",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        thumbnail: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/our-channel-design-template-9fdab8712b42f11eb983d58292f443af_screen.jpg?ts=1711801350",
        author: "Vipin Kumar",
        views: "100K",
        timestamp: "1 day go",
    },
    {
        title: "How to make World Empire in 1 go | MUST WATCH",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        thumbnail: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/our-channel-design-template-9fdab8712b42f11eb983d58292f443af_screen.jpg?ts=1711801350",
        author: "Kunal Sarpal",
        views: "100M",
        timestamp: "1 year",
    },
    {
        title: "410 SIDHU MOSSE WALA | SUNNY MALTON (official video)",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        thumbnail: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/our-channel-design-template-9fdab8712b42f11eb983d58292f443af_screen.jpg?ts=1711801350",
        author: "Sidhu Mosse wala",
        views: "10M",
        timestamp: "1 hour",
    },
    {
        title: "410 SIDHU MOSSE WALA | SUNNY MALTON (official video)",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        thumbnail: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/our-channel-design-template-9fdab8712b42f11eb983d58292f443af_screen.jpg?ts=1711801350",
        author: "Sidhu Mosse wala",
        views: "10M",
        timestamp: "1 hour",
    },
    {
        title: "410 SIDHU MOSSE WALA | SUNNY MALTON (official video)",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        thumbnail: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/our-channel-design-template-9fdab8712b42f11eb983d58292f443af_screen.jpg?ts=1711801350",
        author: "Sidhu Mosse wala",
        views: "10M",
        timestamp: "1 hour",
    },
    {
        title: "410 SIDHU MOSSE WALA | SUNNY MALTON (official video)",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        thumbnail: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/our-channel-design-template-9fdab8712b42f11eb983d58292f443af_screen.jpg?ts=1711801350",
        author: "Sidhu Mosse wala",
        views: "10M",
        timestamp: "1 hour",
    },
    {
        title: "410 SIDHU MOSSE WALA | SUNNY MALTON (official video)",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        thumbnail: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/our-channel-design-template-9fdab8712b42f11eb983d58292f443af_screen.jpg?ts=1711801350",
        author: "Sidhu Mosse wala",
        views: "10M",
        timestamp: "1 hour",
    },
    {
        title: "410 SIDHU MOSSE WALA | SUNNY MALTON (official video)",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        thumbnail: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/our-channel-design-template-9fdab8712b42f11eb983d58292f443af_screen.jpg?ts=1711801350",
        author: "Sidhu Mosse wala",
        views: "10M",
        timestamp: "1 hour",
    },
    {
        title: "410 SIDHU MOSSE WALA | SUNNY MALTON (official video)",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        thumbnail: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/our-channel-design-template-9fdab8712b42f11eb983d58292f443af_screen.jpg?ts=1711801350",
        author: "Sidhu Mosse wala",
        views: "10M",
        timestamp: "1 hour",
    },
]
function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
    {VIDEO.map((video,index)=>(
        <VideoCard key={index}
        title={video.title}
        image={video.image}
        thumbnail={video.thumbnail}
        author={video.author}
        views={video.views}
        timestamp={video.timestamp}/>
    ))}
    </div>
  )
}

export default VideoGrid