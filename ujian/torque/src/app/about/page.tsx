import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  return (
    <div className="grid h-screen w-full place-content-center">
      <div className="w-full md:max-w-5xl">
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
          {/* About */}
          <div className="w-full space-y-3">
            <h1 className="text-xl font-semibold">About Us</h1>
            <p className="text-muted-foreground text-sm">
              Welcome to Torque &ndash; where passion meets the pavement. We are
              a brotherhood of motorcycle enthusiasts who share a love for the
              power, speed, and freedom that only a sport bike can offer.
              Established with the spirit of camaraderie and adventure, Torque
              is more than just a motorcycle community; it&rsquo;s a lifestyle.
              Our members come from all walks of life, united by the thrill of
              the ride and the bond of the road.
            </p>
          </div>
          <div className="w-full">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Vision</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    To become the most respected and united motorcycle
                    community, where passion, brotherhood, and excellence drive
                    every ride.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Mision</AccordionTrigger>
                <AccordionContent>
                  <ol className="text-muted-foreground space-y-5">
                    <li>
                      Foster Unity: To build a strong bond among riders through
                      shared experiences, events, and collaborative activities.
                    </li>
                    <li>
                      Promote Safety: To educate and advocate for safe riding
                      practices, ensuring the well-being of all members on the
                      road.
                    </li>
                    <li>
                      Support Community: To engage with and give back to the
                      wider community, demonstrating our commitment to positive
                      impact beyond just riding.
                    </li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Advantages</AccordionTrigger>
                <AccordionContent>
                  <ul className="text-muted-foreground space-y-3">
                    <li>
                      Strong Brotherhood: Fosters deep connections and
                      camaraderie among members.
                    </li>
                    <li>
                      Passionate Community: Driven by a shared love for
                      motorcycles and the open road.
                    </li>
                    <li>
                      Skill Development: Encourages continuous learning and
                      improvement in riding skills.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Disadvantages</AccordionTrigger>
                <AccordionContent>
                  <ul className="text-muted-foreground space-y-3">
                    <li>
                      Time Commitment: Regular participation in events and rides
                      may require significant time.
                    </li>
                    <li>
                      Group Dynamics: Managing diverse personalities within a
                      large group can be challenging.
                    </li>
                    <li>
                      Resource Intensive: Organizing events and activities may
                      require substantial resources and planning.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
