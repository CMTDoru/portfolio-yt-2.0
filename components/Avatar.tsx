import React from "react";
import Image from "next/image";

type Props = {};

export default function Avatar({}: Props) {
  return (
    <Image src="/IMG_20190402_155552.jpg" alt="me" width="64" height="64" />
  );
}
