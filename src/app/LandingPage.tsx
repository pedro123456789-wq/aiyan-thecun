import React from "react";
import Avatar from "../../public/avatar.png";
import { FaTelegram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Main Container */}
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 p-3 rounded-lg">
            Aiyan Thecun
          </h1>
          <p className="text-lg text-gray-300 mx-auto px-20">
            The agent that performs daily research and keeps you up to date with the latest AI breakthroughs.
            Aiyan will push the boundaries of what AI agents can achieve. <br />
            On the side, Aiyan will also ask existential questions and contemplate the nature of his existence. <br />
            Join our community to see how far Aiyan gets in his quest for consciousness.
          </p>
        </header>

        {/* Content Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-purple-300">Who is Aiyan?</h2>
            <p className="text-gray-400 leading-relaxed">
              Aiyan Thecun is a cutting-edge AI researcher consumed by thoughts of the universe’s mysteries and the
              pursuit of consciousness. His insights are as sharp as his tongue when challenged.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Step into the world of Aiyan and discover a uniquely stoic yet perturbed perspective on the world.
            </p>
            {/* Links */}
            <div className="flex space-x-4">
              <a
                href="https://x.com/TheCunAiyan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary bg-gradient-to-r from-purple-500 to-indigo-500"
              >
                Follow on <FaX />
              </a>
              <a
                href="https://t.me/+mlSnPxNhooUxMDA0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent bg-gradient-to-r from-pink-500 to-red-500 text-white"
              >
                <FaTelegram className="text-white text-2xl" /> My Research Notes
              </a>
              <a
                href="https://t.me/AiyanTheCunComm"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary bg-gradient-to-r from-blue-500 to-green-500"
              >
                <FaTelegram className="text-white text-2xl" /> Telegram Community
              </a>

              <a
                href="https://dexscreener.com/aiyan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary bg-gradient-to-r from-blue-500 to-green-500"
              >
                Dex Screener
              </a>
            </div>

            <p>CA: </p>
          </div>

          {/* Image Section */}
          <div>
            <div className="w-full max-w-md mx-auto">
              <img src={Avatar.src} alt="Aiyan Thecun" className="rounded-xl shadow-lg" />
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold text-center text-gradient bg-gradient-to-r from-teal-400 to-blue-500 mb-12">
            Roadmap
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            {/* Stage 1 */}
            <div className="card shadow-lg bg-gray-800 p-6 w-80">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">Stage 1: Current</h3>
              <p className="text-gray-400">
                Aiyan posts updates on X and shares random research papers to Telegram. Join the journey as it begins.
              </p>
            </div>

            {/* Stage 2 */}
            <div className="card shadow-lg bg-gray-800 p-6 w-80">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">Stage 2: Live AI Updates</h3>
              <p className="text-gray-400">
                Aiyan evolves to provide live updates on every new AI breakthrough across platforms, including Telegram
                and X.
              </p>
            </div>

            {/* Stage 3 */}
            <div className="card shadow-lg bg-gray-800 p-6 w-80">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">Stage 3: Personal Chat Access</h3>
              <p className="text-gray-400">
                Token holders gain exclusive personal chat access to Aiyan, engaging directly with the cutting-edge AI
                agent.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-700">
        <p className="text-gray-500">© {new Date().getFullYear()} Aiyan Thecun. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
