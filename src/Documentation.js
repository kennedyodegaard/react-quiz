import React, { Component } from "react";
import { Link } from "react-router-dom";
import mainImage from "./images/main-img.jpg";

function Documentation(props) {
  return (
    <div className="documentation-page">
      <div className="content">
        <img className="animated bounceInUp" src={mainImage} alt="Sport Fans" />
        <p className="animated bounceInLeft">
          You're officially GOLD <br />
          You have access to this entire page of study materials.
          <br />
          Then, when you're ready, you can take the quiz
          <strong>
            <br />3 Questions in 60 Seconds!
          </strong>
        </p>
        <div className="blog">
          <h2>10 Myths and Facts about Flying That Will Surprise You</h2>
          <p>by Djamilla Bogaard</p>
          <p>
            <strong>
              At some point in your life, you will no doubt have heard some
              stories about flying that make you go: What?! Surely not! Really?!
              What is and isn’t true about these myths about flying? I’ve
              investigated 10 for you.
            </strong>
          </p>
          <h2>
            <strong>1. You can get sucked into an aircraft toilet.</strong>
          </h2>
          <p>
            <em>Myth</em>: Although it certainly sounds likely when you push the
            button and hear that loud sucking sound…
          </p>

          <p>
            Aircraft toilets have a closed vacuum system. When you flush the
            toilet, a powerful vacuum system located near the waste tank sucks
            down anything that’s lying over the hole and draws it down into the
            tank. And we mean anything! We regularly find objects in the
            disposal tank that definitely shouldn’t be there.
          </p>
          <p>
            But never any passengers! The reason being that the vacuum only
            works near the mouth of the disposal pipe. Yes, if the toilet bowl
            and seat had an airtight seal, this might have nasty consequences
            for toilet users who flush when seated. But the toilets and the
            vacuum system are designed in such a way that you{" "}
            <strong>cannot</strong> be sucked into the toilet.
          </p>
          <h2>
            <strong>2. An aircraft door can be opened during a flight.</strong>
          </h2>
          <p>
            <i>Myth</i>: The cabin doors can only be opened if the pressure on
            the inside and outside of the aircraft are virtually the same.
          </p>
          <p>
            The pressure inside and outside is certainly not the same after
            take-off. The air pressure at high altitude is dangerously low,
            which is why the cabin pressure is increased artificially.
          </p>
          <p>
            If you look closely at aircraft doors, you’ll see that they fit into
            the aircraft almost like a cork. A nifty mechanical system ensures
            that they can also open outwards.
          </p>
          <p>
            When the door is closed, cabin pressure is exerted on the door. The
            force with which this takes place is determined by the difference in
            interior and exterior air pressure and the surface area of the door.
            As Sir Isaac Newton so succinctly put it: F = p x A.
          </p>
          <p>
            We won’t bore you with the figures, but we can assure you that this
            force is far greater than the muscle power of the strongest
            passenger. In short, you can not just open the door at cruising
            altitude. Once the plane has landed, the pressure difference is
            minimised and the doors can be opened.
          </p>
          <p>
            Only cabin crew are allowed to do this, of course, because the
            automatic emergency slides have to be disarmed first. When the plane
            draws to a halt at the gate, you’ll hear the pilot say:{" "}
            <em>“Cabin crew, disarm the slides.” </em>When the monitoring system
            in the cockpit indicates that all doors are safe, the pilot will
            say: “<em>Cabin Crew, doors may be opened.”</em>
          </p>

          <h2>
            <strong>3. Cabin crew are allowed to arrest a passenger.</strong>
          </h2>
          <p>
            <em>Fact</em>: At the request (and on behalf) of the captain, cabin
            crew are indeed allowed to arrest a passenger.
          </p>
          <p>
            Naturally, this only happens if the passenger is a threat to flight
            safety. We even have handcuffs on board for this purpose. The
            captain has to concentrate on flying the aircraft and therefore
            can’t carry out the arrest personally. The captain will, however,
            formally and personally announce the arrest after landing, before
            the aircraft doors open.
          </p>
          <h2>
            <strong>
              4. Thunder storms increase the risk of an airplane crash.
            </strong>
          </h2>
          <p>
            <i>Myth</i>: No,{" "}
            <a
              href="https://blog.klm.com/what-happens-when-lightning-strikes-an-aircraft/"
              target="_blank"
              rel="noopener noreferrer"
            >
              thunder does not increase the risk of a crash
            </a>
            .
          </p>
          <p>
            We do avoid thunder storms, of course! Because, as you can imagine,
            such storms and the related turbulence can be very uncomfortable for
            passengers.
          </p>

          <p>
            In addition, lightning striking the aircraft{" "}
            <a
              href="https://blog.klm.com/hidden-nose-aircraft/"
              target="_blank"
              rel="noopener noreferrer"
            >
              can damage systems
            </a>
            , but not to the extent that flight safety is impaired. If this
            happens, a special comprehensive inspection is conducted once the
            plane has landed.
          </p>
          <h2>
            <strong>
              &nbsp;5.&nbsp;If you are born aboard an aircraft, you get to fly
              free of charge for the rest of your life.
            </strong>
          </h2>
          <p>
            <em>Myth</em>: Regrettably, we have to disappoint you on this one…
          </p>
          <h2>
            <strong>
              6. Aircraft dump their toilet waste above the ocean.
            </strong>
          </h2>
          <p>
            <em>Myth</em>:&nbsp;The WC’s contents{" "}
            <a
              href="https://blog.klm.com/this-is-what-happens-to-your-number-two/"
              target="_blank"
              rel="noopener noreferrer"
            >
              get sucked down a pipe
            </a>{" "}
            to waste tanks at the rear of the aircraft. The waste tanks are
            emptied – as they should be – at the airport after every landing,
            regardless of how full they are.
          </p>

          <h2>
            <strong>7. Cabin crew have to meet height requirements.</strong>
          </h2>
          <p>
            <em>Fact</em>: This is true!{" "}
            <a
              href="https://blog.klm.com/come-fly-with-us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our cabin crew
            </a>{" "}
            have to be somewhere between 1.58 m and 1.90 m tall.
          </p>
          <h2>
            <strong>8. There is no row 13 aboard an aircraft.</strong>
          </h2>
          <p>
            <em>Fact</em>: At KLM, you’ll have a{" "}
            <a
              href="https://blog.klm.com/5-airplane-mysteries-you-didnt-know-you-wanted-to-know/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hard time finding row 13
            </a>
            , because this is considered an unlucky number in many countries.
            We’re not superstitious, but you can never be too sure, right?
          </p>

          <h2>
            <strong>9. Pilots have a parachute under their seats.</strong>
          </h2>
          <p>
            <i>Myth</i>: There are no parachutes aboard our aircraft. Our
            aircraft have multiple engines, so if one of them fails, there’s no
            man overboard…literally.
          </p>

          <h2>
            <strong>10. Cabin crew speak a minimum of four languages.</strong>
          </h2>
          <p>
            <i>Myth</i>: Our cabin attendants speak English and Dutch, at least.
            But proficiency in other foreign languages is, of course, a bonus!
          </p>

          <p>
            So, now you know. Some of the stories you’ve heard are true, but
            most of them are fables. ;)
          </p>
          <p>
            If you have any further facts and/or fables you’d like me to check,
            please let me know and I’ll go in search of an answer.
          </p>
          <Link to="/quiz" className="animated bounceInRight start-button">
            Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
