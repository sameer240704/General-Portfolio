const SkillComponent = ({ name, xp, icon }) => {
  return (
    <div className="flex items-center justify-start bg-white/90 rounded-xl p-2 px-2.5 shadow-3xl shadow-black min-w-20">
      <div className="bg-purple-400 rounded-lg h-12 w-12 flex justify-center items-center text-purple-900">
        {icon}
      </div>

      <div
        className="ml-2 flex flex-col justify-start items-start text-sm uppercase tracking-wide"
        style={{ fontFamily: "system-ui" }}
      >
        <h1 className="text-purple-600">{name}</h1>
        <h1 className="text-purple-400">XP: {xp}</h1>
      </div>
    </div>
  );
};

const SkillsCard = ({ skillsData, className, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`w-full skill-card grid ${className} max-md:grid-cols-2 gap-4 bg-transparent border-2 p-16 rounded-xl border-purple-900 relative bg-gradient-to-br from-purple-300/10 via-purple-400/10 to-purple-500/10 backdrop-blur-[30px]`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {skillsData.map((skill) => (
        <SkillComponent
          key={skill.name}
          name={skill.name}
          xp={skill.xp}
          icon={skill.icon}
        />
      ))}

      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'url("/images/dots.png")',
          backgroundSize: "65px",
        }}
      />
    </div>
  );
};

export default SkillsCard;
