import { useState, useEffect } from "react";
import { Github, Linkedin , Moon, Sun } from "lucide-react";

function App() {
 
  const [mousePosition, setMousePosition] = useState({x:0, y:0});
  const [spotLightActive, setSpotLightActive] = useState(false);
  const [circleSize, setCircleSize] = useState(300);

  // useEffect(() =>{
  //   const handleMouseMove = (e) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY
  //     });
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);
  //   return () => window.removeEventListener('mousemove', handleMouseMove);
  // });

  useEffect(() => {
    const updatePosition = (x, y) => {
      setMousePosition({ x, y });
    };

    const updateCircleSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const minDimension = Math.min(width, height);
      
      // Calculate circle size based on screen size
      let size;
      if (width < 768) {
        size = minDimension * 0.25; // 25% for mobile
      } else if (width < 1024) {
        size = minDimension * 0.30; // 30% for tablet
      } else {
        size = minDimension * 0.35; // 35% for desktop
      }
      
      // Set minimum and maximum bounds
      size = Math.max(150, Math.min(size, 500));
      setCircleSize(size);
    };

    const handleMouseMove = (e) => {
      updatePosition(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      // Prevent default to avoid scrolling issues
      e.preventDefault();
      // Get the first touch point
      const touch = e.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    };

    const handleResize = () => {
      updateCircleSize();
    };

    // Initialize circle size
    updateCircleSize();

    // Add both mouse and touch event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const spotlightStyle = {
    background: spotLightActive 
    ? `radial-gradient(circle ${circleSize}px at ${mousePosition.x}px ${mousePosition.y}px, 
          rgba(295, 1050, 0, 0.7), 
          rgba(0, 0, 0, 1))`
      : 'transparent',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 10,
    transition: 'background 0.3s ease-out'
  };

  return (
    <div className="min-h-screen bg-white px-0 sm:px-6 lg:px-5">
      <div className="max-w-3xl lg:max-w-5xl sm:ml-0 md:mr-0 lg:ml-4 mr-8">
        {/* Header with Moon Icon */}
        <div 
          className="flex justify-between items-start mb-3 cursor-pointer"
          onClick={() => setSpotLightActive(!spotLightActive)}
        >
          {spotLightActive ? (
            <Sun className="w-15 h-15 sm:w-1 sm:h-1 md:w-15 md:h-15 lg:w-15 lg:h-15 text-yellow-400 transition-colors z-100" />
          ) :(
            <Moon className="w-15 h-15 sm:w-1 sm:h-1 md:w-15 md:h-15 lg:w-20 lg:h-20 transition-colors" />
          )}
          
        </div>
        
        {/* Main Heading */}
        <div className="mb-8 ml-10 sm:ml-0 md:ml-15 lg:ml-20">
          <h1 className="text-6xl md:text-7xl lg:text-7xl xl:text-10xl font-bold text-gray-900 mb-6">
            Hi.
          </h1>
          
          <div className="space-y-4 text-gray-900 leading-relaxed ">
            <p className="text-xl lg:text-4xl lg:py-4">
              I am <span className="font-semibold">Bibash Chaudhary</span>.😊
            </p>
            
            <p className="text-lg lg:text-3xl lg:py-4 ">
              A <span className="font-semibold">Web Developer (Reactjs)</span> based in Nepal.
            </p>
            
            <p className="text-base lg:text-2xl">
              I’m a Web Developer based in Nepal, passionate about building functional and user-friendly web solutions. 
              I’m currently in my final semester of pursuing a Bachelor’s degree in Bachelors In Technology at Purbanchal University, 
              where I’ve been honing my skills in web development.
            </p>
            
            <p className="text-base lg:text-2xl">
              I’m also enthusiastic about exploring the open-source community and sharing my work. Feel free to check out my projects 
              on GitHub at{' '}
              <a 
                href="https://github.com/bibashleaner" 
                className="group relative inline-block overflow-hidden text-black leading-tight pb-1"
                target="_blank"
                rel="noopener noreferrer"
              >
              {/* <!-- Static bottom half background --> */}
              <span className="absolute left-0 bottom-0 h-1/2 w-full bg-blue-500/25 z-0 pointer-events-none"></span>

              {/* <!-- Full overlay on hover rising from bottom over static --> */}
              <span className="absolute inset-0 bg-blue-500/30 translate-y-1/2 group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10 pointer-events-none"></span>
              {/* <span class="absolute inset-0 bg-blue-500/40 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span> */}
              <span className="relative z-10 px-1 py-0.5 ">github</span>
              </a>.
            </p>
            
            <p className="text-base lg:text-2xl">
              When I’m not coding, I enjoy bike riding, Traveling and of course delicious food, which keep me inspired and energized.
            </p>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-200 my-8 ml-10 sm:ml-0 md:ml-15 lg:ml-20"></div>
        
        {/* Social Links */}
        <div className="flex space-x-4 ml-10 sm:ml-0 md:ml-15 lg:ml-20 text-gray-900">
          <a 
            href="https://github.com/bibashleaner" 
            className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors group"
            aria-label="GitHub Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />
          </a>
          <a 
            href="https://www.linkedin.com/in/bibash-chaudhary-0b6b80303/" 
            className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors group"
            aria-label="LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />
          </a>
        </div>
      </div>
      <div style={spotlightStyle}></div>
    </div>
  )
}

export default App
