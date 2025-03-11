const LazyVideo = () => (
	<video autoPlay muted loop className="hero-video" loading="lazy">
	  <source src="/assets/hero-video.mp4" type="video/mp4" />
	  Tarayıcınız video etiketini desteklemiyor.
	</video>
  );
  
  export default LazyVideo;
  