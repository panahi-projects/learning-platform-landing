import { GiSpellBook } from "react-icons/gi";

const Logo = () => {
  return (
    <span className="flex items-center space-x-2 leading-3">
      {/* <img src="/logo.png" alt="EduKid Logo" className="h-8" /> */}
      <GiSpellBook size={36} className="text-orange-400" />
      <div>
        <h1 className="lg:text-3xl text-2xl font-bold text-background3 fredoka-700 tracking-wider">
          EduKid
        </h1>
        <span className="text-xs font-bold text-background3 fredoka-300 lg:tracking-wider tracking-tighter">
          Make learning fun
        </span>
      </div>
    </span>
  );
};

export default Logo;
