import React from "react";
import StakeSRPAY from "./StakeSRPAY";

export default function Home({user}) {
  return (
    <div>
      <StakeSRPAY user={user}/>
    </div>
  );
}
