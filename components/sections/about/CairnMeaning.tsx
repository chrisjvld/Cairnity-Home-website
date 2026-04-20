"use client";

import { motion } from "motion/react";
import { CairnMark } from "@/components/effects/CairnMark";
import { fadeUp, stagger } from "@/lib/motion";

export function CairnMeaning() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <CairnMark size={84} className="text-[--accent]" withGlow />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-xs uppercase tracking-[0.25em] text-[--accent]"
          >
            What &quot;Cairnity&quot; means
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] text-gradient leading-[1.1] text-balance"
          >
            A cairn is a stack of stones
            <br />
            <span className="italic text-[--fg-muted]">that marks the way forward.</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mt-8 space-y-5 text-lg text-[--fg-muted] text-pretty max-w-2xl mx-auto"
          >
            <p>
              Hikers build them at hard-to-read junctions: when the trail
              fades, when the weather closes in, when you&apos;re unsure
              whether to keep going or turn back. Each stone is placed by
              someone who came before and figured out the next step.
            </p>
            <p>
              That&apos;s the work we want to do for the businesses we serve.
              Place the next stone. Mark the next step. Help you keep moving
              up the curve, with a little less guesswork and a lot more
              confidence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
