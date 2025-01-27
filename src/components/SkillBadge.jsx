import React from 'react';

export default function SkillBadge({ name, level }) {
  const getLevelColor = () => {
    switch (level) {
      case 'Beginner':
        return 'from-pink-300 to-rose-400';
      case 'Intermediate':
        return 'from-pink-400 to-rose-500';
      case 'Advanced':
        return 'from-pink-500 to-rose-600';
      case 'Expert':
        return 'from-pink-600 to-rose-700';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <div className="glass-effect p-4 rounded-2xl group hover:bg-white/[0.15] transition-colors">
      <h3 className="font-medium text-white mb-2">{name}</h3>
      <span className={`text-sm px-3 py-1 rounded-full inline-block bg-gradient-to-r ${getLevelColor()}`}>
        {level}
      </span>
    </div>
  );
}