import { TypeAnimation } from "react-type-animation";

export default function TypeAnimationBlock() {
  return (
    <TypeAnimation
      sequence={[
        "Desarrollador Frontend 💻",
        2000,
        "Músico 🎶",
        2000,
        "Entusiasta de la Tecnología 💻",
        2000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      speed={50}
    />
  );
}
