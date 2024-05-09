import React from "react";
import SkillIcon from "../skillIcone/skillIcone";
import { useTheme } from "@mui/material/styles";
import Skilljauge from "../skilljauge/skilljauge";

export default function SkillItem({
  skillName,
  mobilemode,
  skillLevel,
  icone,
}) {
  const theme = useTheme();
  var skilllevelname;
  switch (skillLevel) {
    case 1:
      skilllevelname = "Novice";
      break;
    case 2:
      skilllevelname = "Debutant";
      break;
    case 3:
      skilllevelname = "Intermediaire";
      break;
    case 4:
      skilllevelname = "Avancer";
      break;
    case 5:
      skilllevelname = "Professionnel";
      break;
    default:
      break;
  }
  return (
    <>
      {mobilemode == 0 ? (
        <>
          <div className="grid  grid-cols-5 h-16 m-1 ">
            <div className="place-content-center">
              <SkillIcon icone={icone} />
            </div>
            <div
              className={` place-content-center text-start text-black  my-auto`}
            >
              {skillName}
            </div>
            <div className="place-content-center col-start-3 col-end-6 ">
              <Skilljauge skillLevel={skillLevel} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex h-16 m-1">
            <div className="place-content-center">
              <SkillIcon icone={icone} />
            </div>
            <div
              className={` place-content-center text-start m-2   my-auto${
                theme.palette.mode === "dark" ? "text-white" : "text-black"
              }`}
            >
              {skilllevelname}
            </div>
          </div>
        </>
      )}
    </>
  );
}
