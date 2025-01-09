import ProfileCard from '../components/ProfileCard';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 flex items-center justify-center">
      <ProfileCard />
      {/* Optional Footer */}
      <footer className="absolute bottom-4 text-white text-center w-full">
        <p>&copy; 2025 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}
