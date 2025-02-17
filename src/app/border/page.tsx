"use client";
import { GlowingEffect } from "../ui/glowing-effect";
export function GlowingEffectDemo() {
  return (
    <>

      <div className="w-full flex  justify-center h-fit py-6">
        <div className="relative rounded-2.5xl border  p-2 ">
          <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores doloremque a debitis asperiores autem ratione dignissimos, eveniet beatae nulla corporis esse. Perferendis id architecto praesentium nobis eaque quibusdam numquam doloremque.
        </p>
      </div>
    </>
  );
}