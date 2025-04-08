import { useState } from 'react';
import { X } from 'lucide-react';
import './Tshields.css'
import t_image1 from '../../../assets/awesome-image1.jpg'

export default function TShield() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Panoramic Moon Roof",
      thumbnail: t_image1,
      videoId: "aye8rty3PfE"
    },
    {
      id: 2,
      title: "Fuel Mileage Tips - Hycross Hybrid",
      thumbnail: t_image1,
      videoId: "dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Hybrid Battery Cooling - Hyryder",
      thumbnail: t_image1,
      videoId: "jNQXAC9IVRw"
    },
    {
      id: 4,
      title: "Flat Tyre Replacement - Hyryder",
      thumbnail: t_image1,
      videoId: "ZTt-kJBI6RY"
    },
    {
      id: 5,
      title: "Vehicle Maintenance Tips",
      thumbnail: t_image1,
      videoId: "LXb3EKWsInQ"
    },
    {
      id: 6,
      title: "Eco Driving Mode Features",
      thumbnail: t_image1,
      videoId: "7PpIS1RtBm8"
    },
    {
      id: 7,
      title: "Safety Features Overview",
      thumbnail: t_image1,
      videoId: "UGxkFRXexhY"
    },
    {
      id: 8,
      title: "Dashboard Controls Guide",
      thumbnail: t_image1,
      videoId: "FFrag8ll85w"
    }
  ];

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="tshield-container">
     
      <div className="hero-banner">
        <div className="banner-content">
          
          <div className="banner-logo-container">
            
          </div>
          
         
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="main-title">
          T SHIELD: Toyota Safety Hygiene & Innovative Education for Long Term Durability
        </h1>
        
        <p className="main-description">
          T SHIELD is a proactive initiative from Toyota to enhance knowledge about vehicle usage to minimize the unwanted cost and to have best efficiency of your vehicle.
        </p>
        
        {/* Video Card Grid */}
        <div className="video-grid">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="video-card"
              onClick={() => openVideo(video)}
            >
              <div className="thumbnail-container">
                <img src={video.thumbnail} alt={video.title} className="thumbnail-image" />
                <div className="play-button-overlay">
                  <div className="play-button">
                    <div className="play-icon"></div>
                  </div>
                </div>
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button 
              onClick={closeVideo}
              className="close-button"
            >
              <X size={24} />
            </button>
            <div className="modal-content">
              <div className="video-player-container">
                <iframe
                  className="video-player"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="modal-title-container">
                <h2 className="modal-title">{selectedVideo.title}</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}