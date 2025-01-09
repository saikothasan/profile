'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ProfileCard = () => {
  const [flip, setFlip] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className={`w-96 h-[480px] relative cursor-pointer rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg overflow-hidden transform transition-all duration-500 ${flip ? 'rotate-y-180' : ''}`}
        onClick={() => setFlip(!flip)}
      >
        {/* Front Face */}
        <div className="absolute top-0 left-0 w-full h-full backface-hidden flex justify-center items-center flex-col text-center text-white p-6 space-y-4">
          <div className="w-24 h-24 bg-gray-800 rounded-full">
            {/* Profile Image */}
            <img className="w-full h-full object-cover rounded-full" src="https://via.placeholder.com/150" alt="Profile" />
          </div>
          <h2 className="text-3xl font-bold">John Doe</h2>
          <p className="text-lg">3D Designer & Web Developer</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-2xl hover:text-gray-300 transition-all" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-2xl hover:text-gray-300 transition-all" />
            </a>
            <a href="mailto:email@example.com">
              <MdEmail className="text-white text-2xl hover:text-gray-300 transition-all" />
            </a>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute top-0 left-0 w-full h-full backface-hidden flex justify-center items-center flex-col bg-gray-800 text-white p-6 space-y-4 transform rotate-y-180">
          <h3 className="text-2xl font-semibold">Skills:</h3>
          <ul className="space-y-2">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Three.js</li>
            <li>WebGL</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
      </motion.div>

      {/* 3D Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} />
          <OrbitControls />
          <Sphere args={[1, 16, 16]} position={[-2, 0, 0]}>
            <meshStandardMaterial color="#0077ff" />
          </Sphere>
        </Canvas>
      </div>
    </div>
  );
};

export default ProfileCard;
