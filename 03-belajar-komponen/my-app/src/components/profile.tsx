import Image from "next/image";

export default function Profile() {
    return (
      <Image
        src="https://i.pinimg.com/originals/59/d3/c8/59d3c8b61242743267659cff8084ae8a.jpg"
        alt="Katherine Johnson"
        width={100}
        height={100}
        style={{
          maxWidth: "100%",
          height: "auto",
          margin: "13px"
        }}
      />
    );
  }