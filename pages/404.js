import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import MyMainMenu from "./../Components/NabBar";

const Custom404 = () => {
  return (
    <>
      <div className="page404">
        <Image
          src="https://i.ibb.co/0GXwfFb/no.gif"
          alt="404"
          width={100}
          height={100}
          className="image404"
        />

        <h1 className="c-w">Page not found</h1>
        <Link href="/" className="backToHome" >Back to Home</Link>
      </div>
    </>
  );
};

export default Custom404;
