import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// YouTube video ID extracted from the URL
const YOUTUBE_VIDEO_ID = 'FjHGZj2IjBk';

declare global {
    interface Window {
        YT: any;
        onYouTubeIframeAPIReady: () => void;
    }
}

const MusicPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [showPrompt, setShowPrompt] = useState(true);
    const playerRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Load YouTube IFrame API
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        }

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player('youtube-player', {
                height: '0',
                width: '0',
                videoId: YOUTUBE_VIDEO_ID,
                playerVars: {
                    autoplay: 0,
                    loop: 1,
                    playlist: YOUTUBE_VIDEO_ID, // Required for loop to work
                    controls: 0,
                    showinfo: 0,
                    modestbranding: 1,
                    fs: 0,
                    cc_load_policy: 0,
                    iv_load_policy: 3,
                    autohide: 0,
                },
                events: {
                    onReady: () => {
                        setIsReady(true);
                    },
                    onStateChange: (event: any) => {
                        if (event.data === window.YT.PlayerState.ENDED) {
                            playerRef.current?.playVideo();
                        }
                    },
                },
            });
        };

        // If YT is already loaded
        if (window.YT && window.YT.Player) {
            window.onYouTubeIframeAPIReady();
        }

        return () => {
            playerRef.current?.destroy();
        };
    }, []);

    const handlePlay = () => {
        if (playerRef.current && isReady) {
            playerRef.current.playVideo();
            setIsPlaying(true);
            setShowPrompt(false);
        }
    };

    const togglePlay = () => {
        if (!playerRef.current || !isReady) return;

        if (isPlaying) {
            playerRef.current.pauseVideo();
            setIsPlaying(false);
        } else {
            playerRef.current.playVideo();
            setIsPlaying(true);
            setShowPrompt(false);
        }
    };

    return (
        <>
            {/* Hidden YouTube Player */}
            <div id="youtube-player" style={{ display: 'none' }} />

            {/* Initial Play Prompt - Shows on first visit */}
            <AnimatePresence>
                {showPrompt && isReady && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="fixed bottom-20 left-4 z-[100]"
                    >
                        <motion.button
                            onClick={handlePlay}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#0B1015]/90 backdrop-blur-md border border-white/10 text-white shadow-2xl hover:bg-[#0B1015] transition-all"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center"
                            >
                                <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </motion.div>
                            <div className="text-left">
                                <p className="text-xs font-medium text-white">Background Music</p>
                                <p className="text-[10px] text-white/70">Click to play ambient sounds</p>
                            </div>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Music Control Button */}
            <motion.button
                ref={containerRef}
                onClick={togglePlay}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-4 left-4 z-[100] w-12 h-12 rounded-full bg-[#0B1015]/90 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl hover:bg-[#0B1015] transition-all group"
                title={isPlaying ? 'Pause Music' : 'Play Music'}
            >
                {/* Animated rings when playing */}
                {isPlaying && (
                    <>
                        <motion.div
                            className="absolute inset-0 rounded-full border border-cyan-400/50"
                            animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                        />
                        <motion.div
                            className="absolute inset-0 rounded-full border border-purple-400/50"
                            animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
                        />
                    </>
                )}

                {/* Music icon or pause icon */}
                <motion.div
                    animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: 'linear' }}
                    className="relative z-10"
                >
                    {isPlaying ? (
                        // Pause icon
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                    ) : (
                        // Music note icon
                        <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                        </svg>
                    )}
                </motion.div>


            </motion.button>
        </>
    );
};

export default MusicPlayer;
