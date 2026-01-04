import { useMemo, useState } from "react";
import { MediaModal, Tabs } from "@/components/shared";

const photos = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  src: "/media/photo-1.jpg",
  alt: `TurkmenTravel Expo photo ${i + 1}`,
}));

const videos = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  thumbnail: "/media/video-thumb.jpg",
  alt: `TurkmenTravel Expo video ${i + 1}`,
}));

type Tab = "photo" | "video";

export default function Media() {
  const [activeTab, setActiveTab] = useState<Tab>("photo");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = useMemo(
    () => [
      { id: "photo", label: "Photo" },
      { id: "video", label: "Video" },
    ],
    []
  );

  const modalItems = useMemo(() => {
    if (activeTab === "photo") {
      return photos.map((photo) => ({
        type: "photo" as const,
        src: photo.src,
        alt: photo.alt,
      }));
    }
    return videos.map((video) => ({
      type: "video" as const,
      src: "",
      poster: video.thumbnail,
      alt: video.alt,
    }));
  }, [activeTab]);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-background px-4">
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <Tabs
          items={tabs}
          activeId={activeTab}
          onChange={(id) => setActiveTab(id as Tab)}
          className="mb-8"
        />

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-10">
          TurkmenTravel Expo-2025
        </h2>

        {/* Photo Grid */}
        {activeTab === "photo" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="aspect-[4/3] rounded-lg overflow-hidden shadow-md"
                role="button"
                tabIndex={0}
                onClick={() => openModal(photo.id - 1)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    openModal(photo.id - 1);
                  }
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}

        {/* Video Grid */}
        {activeTab === "video" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {videos.map((video) => (
              <div
                key={video.id}
                className="aspect-video rounded-lg overflow-hidden shadow-md relative group cursor-pointer"
                role="button"
                tabIndex={0}
                onClick={() => openModal(video.id - 1)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    openModal(video.id - 1);
                  }
                }}
              >
                <img
                  src={video.thumbnail}
                  alt={video.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-secondary ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* See More Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded text-sm font-medium uppercase tracking-wide transition-colors">
            See more
          </button>
        </div>
      </div>

      <MediaModal
        isOpen={isModalOpen}
        items={modalItems}
        activeIndex={activeIndex}
        onIndexChange={setActiveIndex}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
